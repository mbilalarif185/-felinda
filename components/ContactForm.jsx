"use client";

import { useMemo, useState } from "react";

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
        hours: `${formatClock(m)} — ${formatClock(m + 45)}`,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <div className="grid grid-cols-12 gap-10 lg:gap-14">
      {/* ───── LIVE CALLING CARD PREVIEW ───── */}
      <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-[0_16px_50px_rgba(72,49,41,0.05)]">
          <div className="rounded-[1.5rem] bg-gradient-to-b from-[#F4E9E5] via-[#F8F3F1] to-[#EEE3DE] p-8 lg:p-10">
            <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
              Calling Card
            </div>

            <div className="mt-6">
              <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                For
              </div>
              <div className="felinda-serif mt-2 text-3xl text-ink">
                {name.trim() || "(your name)"}
              </div>
              <div className="felinda-sans mt-2 text-[15px] leading-7 text-muted">
                {email.trim() || "your email here"}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-6">
              <div>
                <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Visit
                </div>
                <div className="felinda-serif mt-2 text-2xl text-ink">
                  {dayObj
                    ? `${dayShort[dayObj.getDay()]}, ${dayObj.getDate()} ${monthShort[dayObj.getMonth()]}`
                    : "—"}
                </div>
              </div>
              <div>
                <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Time (45 min)
                </div>
                <div className="felinda-serif mt-2 text-2xl text-ink">
                  {timeLabel?.hours ?? "—"}
                </div>
              </div>
              <div className="col-span-2">
                <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                  Intention
                </div>
                <div className="felinda-serif mt-2 text-2xl text-ink">
                  {intentionLabel}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-[1.25rem] border border-line bg-white/80 p-5">
              <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                Personal Note
              </div>
              <p className="felinda-sans mt-3 min-h-[3.5rem] text-[15px] leading-7 text-muted">
                {note.trim()
                  ? note.trim()
                  : "Your words will appear here as you write..."}
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
              <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                Atelier Mark
              </div>
              <div className="felinda-sans text-xs uppercase tracking-[0.22em] text-clay">
                Felinda · KL
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ───── BOOKING FORM ───── */}
      <form
        onSubmit={handleSubmit}
        className="col-span-12 space-y-14 lg:col-span-7"
      >
        {/* STEP 01 — DAY (calendar: any week / month) */}
        <section>
          <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            01 · Choose a Visit
          </div>
          <h3 className="felinda-serif text-3xl leading-tight">
            A day at the atelier
          </h3>
          <p className="felinda-sans mt-3 max-w-xl text-[15px] leading-7 text-muted">
            Tuesday — Saturday only. Use the arrows to move to another month or week.
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-white p-4 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => shiftCalendarMonth(-1)}
                disabled={
                  calendarMonth.getFullYear() ===
                    todayInAtelierTimeZone().getFullYear() &&
                  calendarMonth.getMonth() ===
                    todayInAtelierTimeZone().getMonth()
                }
                className="felinda-sans rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink transition hover:bg-shell disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <div className="felinda-serif text-center text-xl text-ink sm:text-2xl">
                {monthShort[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
              </div>
              <button
                type="button"
                onClick={() => shiftCalendarMonth(1)}
                className="felinda-sans rounded-full border border-line px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink transition hover:bg-shell"
              >
                Next
              </button>
            </div>

            <div
              className="mt-4 grid grid-cols-7 gap-1 text-center felinda-sans text-[11px] font-medium uppercase tracking-[0.12em] text-clay sm:text-xs"
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
                      "felinda-sans flex aspect-square items-center justify-center rounded-xl text-sm font-medium transition sm:text-base " +
                      (active
                        ? "bg-rose text-white shadow-[0_6px_20px_rgba(216,162,154,0.35)]"
                        : bookable
                          ? "border border-transparent text-ink hover:border-rose/40 hover:bg-shell"
                          : "cursor-not-allowed bg-[#faf8f7] text-muted/35")
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
          <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            02 · Choose a time
          </div>
          <h3 className="felinda-serif text-3xl leading-tight">
            45-minute windows
          </h3>
          <p className="felinda-sans mt-3 max-w-xl text-[15px] leading-7 text-muted">
            Forty-five minute appointments from {formatClock(DAY_START_MIN)} to{" "}
            {formatClock(DAY_END_MIN)} — at least {MIN_TIME_SLOTS} windows offered
            each day.
          </p>

          <div className="felinda-sans mt-6 max-h-[min(320px,50vh)] overflow-y-auto rounded-[1.25rem] border border-line bg-white p-3 sm:p-4">
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
                        ? "border-rose bg-rose text-white shadow-[0_8px_24px_rgba(216,162,154,0.28)]"
                        : "border-line bg-[#fffdfb] text-ink hover:border-rose/35 hover:bg-shell")
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
          <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            03 · Your Intention
          </div>
          <h3 className="felinda-serif text-3xl leading-tight">
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
                    "felinda-sans rounded-full border px-6 py-3.5 text-sm font-medium tracking-[0.04em] transition " +
                    (active
                      ? "border-rose bg-rose text-white"
                      : "border-line bg-white text-ink hover:bg-shell")
                  }
                >
                  {it.label}
                </button>
              );
            })}
          </div>
          <p className="felinda-sans mt-4 text-[15px] leading-7 text-muted">
            {intentions.find((i) => i.id === intention)?.hint}
          </p>
        </section>

        {/* STEP 04 — DETAILS & NOTE */}
        <section>
          <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            04 · Your Details
          </div>
          <h3 className="felinda-serif text-3xl leading-tight">
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
            <div className="felinda-sans mb-2 text-xs uppercase tracking-[0.22em] text-clay">
              A Personal Note
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={5}
              required
              placeholder="The story, the gemstone, or the feeling you'd like the piece to hold..."
              className="felinda-sans w-full resize-none rounded-2xl border border-line bg-white px-5 py-4 text-[15px] leading-7 text-ink placeholder:text-[#B8A9A2] outline-none transition focus:border-rose focus:ring-4 focus:ring-roseSoft/30"
            />
          </div>
        </section>

        {/* SUBMIT */}
        <div className="flex flex-col items-stretch gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="felinda-sans text-xs uppercase tracking-[0.18em] text-[#8B7A73]">
            Confirmation arrives within 1 — 2 days
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="felinda-sans rounded-full bg-rose px-6 py-3.5 text-sm font-medium tracking-[0.04em] text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Reserve the Visit"}
          </button>
        </div>

        {status === "sent" && (
          <div className="felinda-sans rounded-2xl border border-roseSoft/60 bg-[#FBF1ED] px-5 py-4 text-[15px] leading-7 text-[#7A4A40]">
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
    <label className={"block " + className}>
      <span className="felinda-sans mb-2 block text-xs uppercase tracking-[0.22em] text-clay">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="felinda-sans w-full rounded-2xl border border-line bg-white px-5 py-4 text-[15px] text-ink placeholder:text-[#B8A9A2] outline-none transition focus:border-rose focus:ring-4 focus:ring-roseSoft/30"
      />
    </label>
  );
}
