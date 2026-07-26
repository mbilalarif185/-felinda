"use client";

import { useEffect, useMemo, useState } from "react";

import { CONTACT } from "@/lib/contact";

const intentions = [
  { id: "ring", label: "Custom Ring", hint: "Designed around a stone & story" },
  { id: "wedding", label: "Engagement", hint: "Bridal & ceremonial pieces" },
  { id: "heirloom", label: "Heirloom Redesign", hint: "Reimagined inherited gold" },
  { id: "gift", label: "Bespoke Gift", hint: "An intimate gesture" },
  { id: "other", label: "Just Curious", hint: "Begin with a conversation" },
];

/** Atelier bookable days (JS): Tue — Sat */
const BOOKABLE_WEEKDAYS = new Set([2, 3, 4, 5, 6]);

/** First and last minute-of-day for appointments (45-minute blocks, last ends at closing). */
const DAY_START_MIN = 11 * 60;
const DAY_END_MIN = 19 * 60;

const MIN_TIME_SLOTS = 4;

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatClock(totalMinutes) {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${pad2(h)}:${pad2(m)}`;
}

/**
 * 45-minute slots from DAY_START_MIN; last slot ends at or before DAY_END_MIN.
 * Guarantees at least MIN_TIME_SLOTS by extending closing time if needed (edge case).
 */
function buildFortyFiveMinuteSlots() {
  let endCap = DAY_END_MIN;
  const slots = [];
  const pushSlots = () => {
    slots.length = 0;
    for (let m = DAY_START_MIN; m + 45 <= endCap; m += 45) {
      slots.push({
        id: `slot-${m}`,
        hours: `${formatClock(m)} to ${formatClock(m + 45)}`,
      });
    }
  };
  pushSlots();
  while (slots.length < MIN_TIME_SLOTS && endCap < DAY_START_MIN + 45 * MIN_TIME_SLOTS) {
    endCap += 45;
    pushSlots();
  }
  return slots;
}

const timeSlots = buildFortyFiveMinuteSlots();

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBookableDay(date) {
  const t = startOfDay(date);
  const today = startOfDay(todayInAtelierTimeZone());
  if (t < today) return false;
  return BOOKABLE_WEEKDAYS.has(t.getDay());
}

function firstBookableOnOrAfter(fromDate) {
  const d = startOfDay(fromDate);
  const limit = new Date(d);
  limit.setDate(limit.getDate() + 400);
  while (d <= limit) {
    if (isBookableDay(d)) return new Date(d);
    d.setDate(d.getDate() + 1);
  }
  return startOfDay(todayInAtelierTimeZone());
}

function monthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const pad = first.getDay();
  const cells = [];
  for (let i = 0; i < pad; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ATELIER_TIME_ZONE = "Asia/Kuala_Lumpur";

function todayInAtelierTimeZone() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: ATELIER_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return new Date(year, month - 1, day);
}

function initialBookableDate() {
  const tomorrow = todayInAtelierTimeZone();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return firstBookableOnOrAfter(tomorrow);
}

export default function ContactForm() {
  const [selectedDate, setSelectedDate] = useState(initialBookableDate);
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const first = initialBookableDate();
    return new Date(first.getFullYear(), first.getMonth(), 1);
  });
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]?.id ?? "");
  const [intention, setIntention] = useState(intentions[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle");
  const [formError, setFormError] = useState("");
  const [captchaId, setCaptchaId] = useState("");
  const [captchaPrompt, setCaptchaPrompt] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaLoading, setCaptchaLoading] = useState(false);

  useEffect(() => {
    const loadCaptcha = async () => {
      setCaptchaLoading(true);
      try {
        const res = await fetch("/api/contact/captcha", { cache: "no-store" });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data?.captchaId || !data?.prompt) {
          throw new Error("Could not load captcha.");
        }
        setCaptchaId(data.captchaId);
        setCaptchaPrompt(data.prompt);
      } catch {
        setCaptchaId("");
        setCaptchaPrompt("Could not load challenge. Please refresh it.");
      } finally {
        setCaptchaLoading(false);
      }
    };

    loadCaptcha();
  }, []);

  const refreshCaptcha = async () => {
    setCaptchaAnswer("");
    setCaptchaLoading(true);
    try {
      const res = await fetch("/api/contact/captcha", { cache: "no-store" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.captchaId || !data?.prompt) {
        throw new Error("Could not refresh captcha.");
      }
      setCaptchaId(data.captchaId);
      setCaptchaPrompt(data.prompt);
    } catch {
      setCaptchaId("");
      setCaptchaPrompt("Could not load challenge. Please refresh it.");
    } finally {
      setCaptchaLoading(false);
    }
  };

  const intentionLabel = intentions.find((i) => i.id === intention)?.label ?? "—";
  const timeLabel = timeSlots.find((t) => t.id === selectedTime);
  const dayObj = selectedDate;

  const calendarCells = useMemo(
    () => monthMatrix(calendarMonth.getFullYear(), calendarMonth.getMonth()),
    [calendarMonth],
  );

  const shiftCalendarMonth = (delta) => {
    setCalendarMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  const selectDate = (d) => {
    if (!d || !isBookableDay(d)) return;
    setSelectedDate(startOfDay(d));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!captchaId || !captchaAnswer.trim()) {
      setFormError("Please complete the captcha before sending.");
      return;
    }
    setStatus("sending");
    const visitLabel = dayObj
      ? `${dayShort[dayObj.getDay()]}, ${dayObj.getDate()} ${monthShort[dayObj.getMonth()]} ${dayObj.getFullYear()}`
      : "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          note: note.trim(),
          intention: intentionLabel,
          visitDate: visitLabel,
          timeWindow: timeLabel?.hours ?? "",
          captchaId,
          captchaAnswer: captchaAnswer.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try WhatsApp or email."
        );
      }
      setStatus("sent");
      setCaptchaAnswer("");
    } catch (err) {
      setStatus("idle");
      await refreshCaptcha();
      setFormError(
        err instanceof Error ? err.message : "Could not send. Please try again."
      );
    }
  };

  return (
    <div className="grid min-w-0 grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
      {/* ───── LIVE CALLING CARD PREVIEW ───── */}
      <aside className="col-span-12 min-w-0 max-w-full lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
        <div className="box-border w-full max-w-full overflow-hidden rounded-[2rem] border border-line bg-white/[0.05] p-4 shadow-[0_16px_50px_rgba(72,49,41,0.05)] sm:p-6">
          <div className="box-border w-full max-w-full rounded-[1.5rem] bg-gradient-to-b from-[#161310] via-[#141414] to-[#211c17] p-5 sm:p-8 lg:p-10">
            <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
              Calling Card
            </div>

            <div className="mt-6">
              <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                For
              </div>
              <div className="auréa-serif mt-2 max-w-full break-words text-2xl text-ink sm:text-3xl">
                {name.trim() || "(your name)"}
              </div>
              <div className="auréa-sans mt-2 text-[15px] leading-7 text-muted">
                {email.trim() || "your email here"}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-6">
              <div>
                <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Visit
                </div>
                <div className="auréa-serif mt-2 text-2xl text-ink">
                  {dayObj
                    ? `${dayShort[dayObj.getDay()]}, ${dayObj.getDate()} ${monthShort[dayObj.getMonth()]}`
                    : "—"}
                </div>
              </div>
              <div>
                <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Time (45 min)
                </div>
                <div className="auréa-serif mt-2 text-2xl text-ink">
                  {timeLabel?.hours ?? "—"}
                </div>
              </div>
              <div className="col-span-2">
                <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Intention
                </div>
                <div className="auréa-serif mt-2 text-2xl text-ink">
                  {intentionLabel}
                </div>
              </div>
            </div>

            <div className="mt-7 box-border w-full max-w-full rounded-[1.25rem] border border-line bg-white/[0.05] p-4 sm:p-5">
              <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                Personal Note
              </div>
              <p className="auréa-sans mt-3 min-h-[3.5rem] max-w-full break-words text-[15px] leading-7 text-muted [overflow-wrap:anywhere]">
                {note.trim()
                  ? note.trim()
                  : "Your words will appear here as you write..."}
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
              <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                Atelier Mark
              </div>
              <div className="auréa-sans text-xs uppercase tracking-[0.22em] text-clay">
                Auréa · KL
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ───── BOOKING FORM ───── */}
      <form
        onSubmit={handleSubmit}
        className="col-span-12 min-w-0 max-w-full space-y-14 lg:col-span-7"
      >
        {/* STEP 01 — DAY (calendar: any week / month) */}
        <section>
          <div className="auréa-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            01 · Choose a Visit
          </div>
          <h3 className="auréa-serif text-3xl leading-tight">
            A day at the atelier
          </h3>
          <p className="auréa-sans mt-3 max-w-full break-words text-[15px] leading-7 text-muted [overflow-wrap:anywhere] sm:max-w-xl">
            Tuesday to Saturday only. Use the arrows to move to another month or week.
          </p>

          <div className="mt-6 box-border w-full max-w-full overflow-hidden rounded-[1.5rem] border border-line bg-white/[0.05] p-3 sm:p-6">
            <div className="flex min-w-0 items-center justify-between gap-1.5 sm:gap-3">
              <button
                type="button"
                onClick={() => shiftCalendarMonth(-1)}
                disabled={
                  calendarMonth.getFullYear() ===
                    todayInAtelierTimeZone().getFullYear() &&
                  calendarMonth.getMonth() ===
                    todayInAtelierTimeZone().getMonth()
                }
                className="auréa-sans shrink-0 rounded-full border border-line px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-ink transition hover:bg-shell disabled:cursor-not-allowed disabled:opacity-40 sm:px-4 sm:text-xs sm:tracking-[0.14em]"
              >
                Previous
              </button>
              <div className="auréa-serif min-w-0 flex-1 px-0.5 text-center text-[15px] leading-tight text-ink sm:flex-none sm:px-2 sm:text-xl md:text-2xl">
                {monthShort[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
              </div>
              <button
                type="button"
                onClick={() => shiftCalendarMonth(1)}
                className="auréa-sans shrink-0 rounded-full border border-line px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-ink transition hover:bg-shell sm:px-4 sm:text-xs sm:tracking-[0.14em]"
              >
                Next
              </button>
            </div>

            <div
              className="mt-4 grid grid-cols-7 gap-1 text-center auréa-sans text-[11px] font-medium uppercase tracking-[0.12em] text-clay sm:text-xs"
              role="row"
            >
              {dayShort.map((d) => (
                <div key={d} className="py-2">
                  {d}
                </div>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-1">
              {calendarCells.map((cell, idx) => {
                if (!cell) {
                  return <div key={`empty-${idx}`} className="aspect-square" aria-hidden />;
                }
                const bookable = isBookableDay(cell);
                const active = dayObj && isSameDay(cell, dayObj);
                return (
                  <button
                    key={`${cell.getFullYear()}-${cell.getMonth()}-${cell.getDate()}`}
                    type="button"
                    disabled={!bookable}
                    onClick={() => selectDate(cell)}
                    className={
                      "auréa-sans flex aspect-square items-center justify-center rounded-xl text-sm font-medium transition sm:text-base " +
                      (active
                        ? "bg-luxeGold text-luxeBlack shadow-[0_6px_20px_rgba(216,162,154,0.35)]"
                        : bookable
                          ? "border border-transparent text-ink hover:border-rose/40 hover:bg-shell"
                          : "cursor-not-allowed bg-[#161310] text-muted/35")
                    }
                  >
                    {cell.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* STEP 02 — TIME (45-minute slots, minimum {MIN_TIME_SLOTS}) */}
        <section>
          <div className="auréa-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            02 · Choose a time
          </div>
          <h3 className="auréa-serif text-3xl leading-tight">
            45-minute windows
          </h3>
          <p className="auréa-sans mt-3 max-w-full break-words text-[15px] leading-7 text-muted [overflow-wrap:anywhere] sm:max-w-xl">
            Forty-five minute appointments from {formatClock(DAY_START_MIN)} to{" "}
            {formatClock(DAY_END_MIN)}, with at least {MIN_TIME_SLOTS} windows offered
            each day.
          </p>

          <div className="auréa-sans mt-6 max-h-[min(320px,50vh)] overflow-y-auto rounded-[1.25rem] border border-line bg-white/[0.05] p-3 sm:p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {timeSlots.map((t) => {
                const active = selectedTime === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTime(t.id)}
                    className={
                      "rounded-xl border px-3 py-3 text-left text-[13px] font-medium leading-snug tracking-[0.02em] transition sm:text-sm " +
                      (active
                        ? "border-rose bg-luxeGold text-luxeBlack shadow-[0_8px_24px_rgba(216,162,154,0.28)]"
                        : "border-line bg-[#141414] text-ink hover:border-rose/35 hover:bg-shell")
                    }
                  >
                    {t.hours}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* STEP 03 — INTENTION */}
        <section>
          <div className="auréa-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            03 · Your Intention
          </div>
          <h3 className="auréa-serif text-3xl leading-tight">
            What brings you here
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {intentions.map((it) => {
              const active = intention === it.id;
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setIntention(it.id)}
                  className={
                    "auréa-sans rounded-full border px-6 py-3.5 text-sm font-medium tracking-[0.04em] transition " +
                    (active
                      ? "border-rose bg-luxeGold text-luxeBlack"
                      : "border-line bg-white/[0.05] text-ink hover:bg-shell")
                  }
                >
                  {it.label}
                </button>
              );
            })}
          </div>
          <p className="auréa-sans mt-4 text-[15px] leading-7 text-muted">
            {intentions.find((i) => i.id === intention)?.hint}
          </p>
        </section>

        {/* STEP 04 — DETAILS & NOTE */}
        <section>
          <div className="auréa-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            04 · Your Details
          </div>
          <h3 className="auréa-serif text-3xl leading-tight">
            A few details &amp; a note
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              value={name}
              onChange={setName}
              placeholder="Your full name"
              required
            />
            <Field
              label="Email"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
              type="email"
              required
            />
            <Field
              label="Phone / WhatsApp"
              value={phone}
              onChange={setPhone}
              placeholder={CONTACT.whatsappDisplay}
              type="tel"
              className="sm:col-span-2"
            />
          </div>

          <div className="mt-5">
            <div className="auréa-sans mb-2 text-xs uppercase tracking-[0.22em] text-clay">
              A Personal Note
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={5}
              required
              placeholder="The story, the gemstone, or the feeling you'd like the piece to hold..."
              className="auréa-sans w-full resize-none rounded-2xl border border-line bg-white/[0.05] px-5 py-4 text-[15px] leading-7 text-ink placeholder:text-[#6b665e] outline-none transition focus:border-rose focus:ring-4 focus:ring-roseSoft/30"
            />
          </div>
        </section>

        {/* SUBMIT */}
        <div className="flex flex-col items-stretch gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="auréa-sans text-xs uppercase tracking-[0.18em] text-[#a89f95]">
              Confirmation arrives within one to two days
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="auréa-sans rounded-full bg-rose px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-luxeBlack transition hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Reserve the Visit"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white/[0.05] p-4">
          <div className="auréa-sans text-xs uppercase tracking-[0.18em] text-clay">
            Captcha
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <div className="auréa-sans text-[15px] text-ink">
              {captchaPrompt || "Loading challenge..."}
            </div>
            <button
              type="button"
              onClick={refreshCaptcha}
              disabled={captchaLoading}
              className="auréa-sans rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.12em] text-ink transition hover:bg-shell disabled:cursor-not-allowed disabled:opacity-50"
            >
              {captchaLoading ? "Loading..." : "Refresh"}
            </button>
          </div>
          <input
            type="text"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            required
            placeholder="Type your answer"
            className="auréa-sans mt-3 w-full rounded-2xl border border-line bg-white/[0.05] px-5 py-4 text-[15px] text-ink placeholder:text-[#6b665e] outline-none transition focus:border-rose focus:ring-4 focus:ring-roseSoft/30"
          />
        </div>

        {formError ? (
          <div className="auréa-sans rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-[15px] leading-7 text-red-900">
            {formError}
          </div>
        ) : null}

        {status === "sent" && (
          <div className="auréa-sans rounded-2xl border border-roseSoft/60 bg-[#14100c] px-5 py-4 text-[15px] leading-7 text-[#e8ce8b]">
            Your calling card has been received. The atelier will personally
            confirm your appointment within one to two days.
          </div>
        )}
      </form>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required, className = "" }) {
  return (
    <label className={"block min-w-0 " + className}>
      <span className="auréa-sans mb-2 block text-xs uppercase tracking-[0.22em] text-clay">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="auréa-sans w-full rounded-2xl border border-line bg-white/[0.05] px-5 py-4 text-[15px] text-ink placeholder:text-[#6b665e] outline-none transition focus:border-rose focus:ring-4 focus:ring-roseSoft/30"
      />
    </label>
  );
}
