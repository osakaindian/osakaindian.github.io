# Setting up live view counts and comments

The Posts page shows a view count and a comment thread on each post. Both are
backed by [Supabase](https://supabase.com) — a free hosted Postgres database.
Nothing else on the site needs this; without it, the site still builds and
deploys fine, the view/comment widgets just hide themselves.

This is a one-time setup, roughly 15 minutes.

## 1. Create the project

1. Go to [supabase.com](https://supabase.com), sign up (GitHub login is
   easiest), and create a new project.
2. Pick a region close to Japan (Tokyo or Singapore).
3. Set a database password — you won't need it day to day, just save it
   somewhere.

## 2. Create the tables

In the Supabase dashboard, open **SQL Editor → New query**, paste the
following, and click **Run**. This creates two tables and the rules around
them — nothing else on your database is touched.

```sql
-- One row per post, tracking its live counts.
create table if not exists public.posts (
  slug text primary key,
  view_count bigint not null default 0,
  comment_count bigint not null default 0
);

-- Comments, one row per comment.
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null references public.posts(slug) on delete cascade,
  author_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists comments_post_slug_idx
  on public.comments (post_slug, created_at);

-- Called by the site to add one view, atomically, creating the row on first
-- view. Runs as the function owner (security definer) so visitors can call
-- it without needing direct write access to the posts table.
create or replace function public.increment_view(p_slug text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
begin
  insert into public.posts (slug, view_count)
  values (p_slug, 1)
  on conflict (slug) do update set view_count = public.posts.view_count + 1
  returning view_count into new_count;
  return new_count;
end;
$$;

grant execute on function public.increment_view(text) to anon, authenticated;

-- Keeps posts.comment_count in sync automatically whenever a comment is
-- added or removed — the site never has to update this counter itself.
create or replace function public.sync_comment_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    insert into public.posts (slug, comment_count)
    values (new.post_slug, 1)
    on conflict (slug) do update set comment_count = public.posts.comment_count + 1;
  elsif tg_op = 'DELETE' then
    update public.posts set comment_count = greatest(comment_count - 1, 0)
    where slug = old.post_slug;
  end if;
  return null;
end;
$$;

drop trigger if exists comments_sync_count on public.comments;
create trigger comments_sync_count
  after insert or delete on public.comments
  for each row execute function public.sync_comment_count();

-- Row Level Security: locked down by default, then opened up exactly as
-- much as the site needs. Nobody can insert or edit a posts row directly —
-- only through increment_view above.
alter table public.posts enable row level security;
alter table public.comments enable row level security;

create policy "Anyone can read post counts"
  on public.posts for select using (true);

create policy "Anyone can read comments"
  on public.comments for select using (true);

create policy "Anyone can add a comment"
  on public.comments for insert
  with check (
    char_length(author_name) between 1 and 60
    and char_length(body) between 1 and 2000
  );
```

There's deliberately no update/delete policy for the public — nobody can
edit or remove a comment except you, from the dashboard (step 5).

## 3. Turn on Realtime

The live-updating part (counts ticking up, new comments appearing without a
refresh) uses Supabase Realtime, which listens for database changes.

Dashboard → **Database → Replication** → find the `posts` and `comments`
tables → toggle them on.

## 4. Get your credentials

Dashboard → **Project Settings → API**. You need two values:

- **Project URL** (looks like `https://xxxxx.supabase.co`)
- **anon public** key (a long string — not the `service_role` key, which
  you should never put in a website)

The anon key is meant to be public. It's safe in the site's code — the
policies from step 2 are what actually control access, not secrecy of this
key.

## 5. Add the credentials

**For your own computer**, copy `.env.example` to `.env` and paste the two
values in:

```
PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

Restart `npm run dev` after saving.

**For the live site**, the build runs on GitHub's servers, which don't see
your `.env` file (it's gitignored on purpose — never commit real credentials).
Add the same two values as repository secrets instead:

Repository → **Settings → Secrets and variables → Actions → New repository
secret**. Add both `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY`. The
deploy workflow already reads them from there.

Push anything to `main` and the next deploy will pick them up.

## 6. Moderation

There's no login system — anyone can leave a comment, which keeps the bar
low for a community site but means occasional spam is possible (a honeypot
field filters out the simplest bots, nothing more). To remove a comment:
dashboard → **Table Editor → comments** → find the row → delete it. The
post's comment count updates itself automatically.

## 7. Keeping the free project awake

Supabase pauses free-tier projects after seven days with no activity — easy
to hit during a semester break. `.github/workflows/keep-supabase-alive.yml`
pings the database every three days automatically, using the same two
secrets from step 5, so this shouldn't come up. If a project does pause
anyway, resuming it from the dashboard takes under a minute and no data is
lost.
