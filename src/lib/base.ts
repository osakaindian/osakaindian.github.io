// Prefixes a root-relative path ("/events/", "/images/x.jpg") with whatever
// `base` is set to in astro.config.mjs. When base is "/" (the normal case —
// an org repo named <org>.github.io, served from the domain root) this is a
// no-op. When the site is temporarily sitting at a subpath, like
// https://7vidhan.github.io/oia/ during testing, this is what makes every
// internal link and image actually resolve.
//
// External links, mailto:, and anchors (#section) all pass straight
// through unchanged — only paths starting with "/" are touched.
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL; // e.g. "/oia/" or "/"
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${trimmed}${path}`;
}
