-- Reservations table for incoming form submissions from the website.
-- Mario sees these in the Supabase Dashboard under Table Editor → reservations.

create table if not exists public.reservations (
  id          bigserial primary key,
  created_at  timestamptz not null default now(),
  guests      int4        not null,
  date        date        not null,
  time        text        not null,
  name        text        not null,
  phone       text        not null,
  email       text        not null,
  notes       text,
  status      text        not null default 'new',  -- new | confirmed | cancelled | no_show
  source      text        not null default 'web',
  user_agent  text,
  ip          text
);

create index if not exists reservations_date_idx on public.reservations (date desc, time);
create index if not exists reservations_status_idx on public.reservations (status, created_at desc);

-- RLS: lock down, only the service role (used by the Next.js Server Action) can write.
alter table public.reservations enable row level security;

-- No public policies → no anon/auth-user can read or write.
-- The Service-Role-Key bypasses RLS, so the Server Action works.

comment on table public.reservations is
  'Reservierungs-Anfragen vom Web-Formular. Mario verwaltet hier — Status auf "confirmed" setzen sobald telefonisch bestätigt.';
