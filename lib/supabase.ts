import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

/**
 * Returns the server-side Supabase client (service-role) or null if env not configured.
 * Service-role bypasses RLS — only ever import this from server code.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;

  cached = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

export type ReservationRow = {
  id: number;
  created_at: string;
  guests: number;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string | null;
  status: "new" | "confirmed" | "cancelled" | "no_show";
};
