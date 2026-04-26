"use server";

import { Resend } from "resend";
import { z } from "zod";

import { SITE } from "@/lib/site";

const reserveSchema = z.object({
  guests: z.string().min(1).max(3),
  date: z.string().min(1),
  time: z.string().min(1),
  name: z.string().min(2).max(120),
  phone: z.string().min(4).max(40),
  email: z.string().email(),
  notes: z.string().max(500).optional().default(""),
});

export type ReserveInput = z.infer<typeof reserveSchema>;

export type ReserveResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Partial<Record<keyof ReserveInput, string>> };

export async function reserveAction(input: ReserveInput): Promise<ReserveResult> {
  const parsed = reserveSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ReserveInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ReserveInput;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Bitte prüfen Sie Ihre Angaben.", fieldErrors };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[reserve] RESEND_API_KEY not set — submission logged but not sent.");
    console.info("[reserve] payload:", data);
    return { ok: true };
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM ?? "Bei Mario <reservierung@bei-mario.de>";

  try {
    await resend.emails.send({
      from: fromAddress,
      to: [SITE.contact.reservationEmail],
      replyTo: data.email,
      subject: `Reservierungsanfrage — ${data.name} · ${data.date} ${data.time} · ${data.guests}P`,
      text: [
        "Neue Reservierungsanfrage über die Website",
        "",
        `Personen:    ${data.guests}`,
        `Datum:       ${data.date}`,
        `Uhrzeit:     ${data.time}`,
        `Name:        ${data.name}`,
        `Telefon:     ${data.phone}`,
        `E-Mail:      ${data.email}`,
        data.notes ? `Anlass/Wünsche: ${data.notes}` : "",
        "",
        `— ${SITE.url}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("[reserve] resend failed:", err);
    return {
      ok: false,
      error: "Versand fehlgeschlagen. Bitte rufen Sie uns an oder versuchen es später erneut.",
    };
  }
}
