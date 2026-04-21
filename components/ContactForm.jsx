"use client";

import { useEffect, useMemo, useState } from "react";

const intentions = [
  { id: "ring", label: "Custom Ring", hint: "Designed around a stone & story" },
  { id: "wedding", label: "Engagement", hint: "Bridal & ceremonial pieces" },
  { id: "heirloom", label: "Heirloom Redesign", hint: "Reimagined inherited gold" },
  { id: "gift", label: "Bespoke Gift", hint: "An intimate gesture" },
  { id: "other", label: "Just Curious", hint: "Begin with a conversation" },
];

const timeSlots = [
  { id: "morning", label: "Morning", hours: "11:00 — 12:30" },
  { id: "afternoon", label: "Afternoon", hours: "14:00 — 15:30" },
  { id: "evening", label: "Late Day", hours: "16:30 — 18:00" },
];

function getNextDays(count = 6) {
  const days = [];
  const today = new Date();
  let i = 1;
  while (days.length < count && i < 30) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 1) days.push(d);
    i++;
  }
  return days;
}

const monthShort = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const dayShort = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function ContactForm() {
  const days = useMemo(() => getNextDays(6), []);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1].id);
  const [intention, setIntention] = useState(intentions[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (days.length && selectedDay === null) setSelectedDay(0);
  }, [days, selectedDay]);

  const intentionLabel = intentions.find((i) => i.id === intention)?.label ?? "—";
  const timeLabel = timeSlots.find((t) => t.id === selectedTime);
  const dayObj = selectedDay !== null ? days[selectedDay] : null;

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

            <div className="my-7 h-px w-full bg-line" />

            <div className="grid grid-cols-2 gap-6">
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
                  Hour
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
        {/* STEP 01 — DAY */}
        <section>
          <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            01 · Choose a Visit
          </div>
          <h3 className="felinda-serif text-3xl leading-tight">
            A day at the atelier
          </h3>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {days.map((d, i) => {
              const active = selectedDay === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedDay(i)}
                  className={
                    "rounded-[1.25rem] border p-4 text-left transition " +
                    (active
                      ? "border-rose bg-rose text-white shadow-[0_10px_30px_rgba(216,162,154,0.3)]"
                      : "border-line bg-white text-ink hover:bg-shell")
                  }
                >
                  <div
                    className={
                      "felinda-sans text-xs uppercase tracking-[0.22em] " +
                      (active ? "text-white/80" : "text-clay")
                    }
                  >
                    {dayShort[d.getDay()]}
                  </div>
                  <div className="felinda-serif mt-2 text-3xl leading-none">
                    {d.getDate()}
                  </div>
                  <div
                    className={
                      "felinda-sans mt-1 text-xs tracking-[0.14em] " +
                      (active ? "text-white/80" : "text-muted")
                    }
                  >
                    {monthShort[d.getMonth()]}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* STEP 02 — TIME */}
        <section>
          <div className="felinda-sans mb-4 text-xs uppercase tracking-[0.28em] text-clay">
            02 · Choose an Hour
          </div>
          <h3 className="felinda-serif text-3xl leading-tight">
            When the light is right
          </h3>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {timeSlots.map((t) => {
              const active = selectedTime === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTime(t.id)}
                  className={
                    "rounded-[1.25rem] border p-4 text-left transition " +
                    (active
                      ? "border-rose bg-rose text-white shadow-[0_10px_30px_rgba(216,162,154,0.3)]"
                      : "border-line bg-white text-ink hover:bg-shell")
                  }
                >
                  <div
                    className={
                      "felinda-sans text-xs uppercase tracking-[0.22em] " +
                      (active ? "text-white/80" : "text-clay")
                    }
                  >
                    {t.label}
                  </div>
                  <div className="felinda-serif mt-2 text-2xl">{t.hours}</div>
                </button>
              );
            })}
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
              placeholder="+60 12 345 6789"
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
