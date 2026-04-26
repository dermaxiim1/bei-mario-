"use client";

import { useState, useTransition } from "react";

import { reserveAction, type ReserveInput } from "@/app/actions/reserve";
import { cn } from "@/lib/utils";

const TIME_SLOTS = ["12:00", "12:30", "13:00", "13:30", "14:00", "17:30", "18:00", "18:30", "19:00"];

const initialState: ReserveInput = {
  guests: "2",
  date: "",
  time: "13:00",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export function ReserveForm() {
  const [form, setForm] = useState<ReserveInput>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ReserveInput, string>>>({});
  const [done, setDone] = useState(false);
  const [topError, setTopError] = useState<string | null>(null);
  const [pending, start] = useTransition();

  const update = <K extends keyof ReserveInput>(key: K, value: ReserveInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTopError(null);
    setErrors({});
    start(async () => {
      const result = await reserveAction(form);
      if (result.ok) {
        setDone(true);
      } else {
        setTopError(result.error);
        if (result.fieldErrors) setErrors(result.fieldErrors);
      }
    });
  };

  if (done) {
    return (
      <div className="mt-8 rounded-sm bg-white/10 p-12 text-center backdrop-blur-sm">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full border-2 border-cream text-2xl">
          ✓
        </div>
        <p className="mt-5 font-serif text-3xl italic">
          Grazie, {form.name || "wir freuen uns"}!
        </p>
        <p className="mt-3 text-base opacity-85">
          Wir haben Ihre Anfrage für {form.guests} Personen am {form.date} um{" "}
          {form.time} Uhr erhalten. Eine Bestätigung kommt per E-Mail oder telefonisch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 rounded-sm bg-white/10 p-8 backdrop-blur-sm"
      noValidate
    >
      {topError && (
        <p className="mb-5 rounded-sm bg-cream/10 px-4 py-3 text-sm text-cream">
          {topError}
        </p>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <Field label="Personen" error={errors.guests}>
          <select
            value={form.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={inputCls}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n}>{n}</option>
            ))}
            <option>9+</option>
          </select>
        </Field>
        <Field label="Datum" error={errors.date}>
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="Uhrzeit" error={errors.time}>
          <select
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputCls}
          >
            {TIME_SLOTS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            required
            placeholder="Ihr Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
          />
        </Field>
        <Field label="Telefon" error={errors.phone}>
          <input
            type="tel"
            required
            placeholder="für Rückfragen"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-3">
        <Field label="E-Mail" error={errors.email}>
          <input
            type="email"
            required
            placeholder="für die Bestätigung"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-3">
        <Field label="Wünsche / Anlass" error={errors.notes}>
          <input
            type="text"
            placeholder="z.B. Geburtstag, Allergien …"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 w-full rounded-full bg-cream px-6 py-4 font-serif text-lg font-medium italic text-terra-deep transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] disabled:opacity-60"
      >
        {pending ? "Wird gesendet …" : "Tisch reservieren"}
      </button>
    </form>
  );
}

const inputCls = cn(
  "w-full rounded-sm border-0 bg-cream/95 px-4 py-3 text-base text-ink",
  "focus:outline-2 focus:outline-cream",
);

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col">
      <span className="mb-1.5 text-[11px] uppercase tracking-[0.14em] opacity-80">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 text-xs text-cream/85">{error}</span>}
    </label>
  );
}
