// ---------------------------------------------------------------------------
// Everything a future committee is likely to change lives in this one file.
// Edit it on github.com directly — no need to run the site locally.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Osaka Indian Association',
  nameJa: '大阪インド人会',
  short: 'OIA',
  tagline:
    'A community for Indian students, researchers, professionals and alumni living in Osaka.',
  // TODO: replace with the official address once the handover is done.
  email: 'hello@example.org',
  // Leave a value empty ('') and the link disappears from the site.
  social: {
    instagram: '',
    facebook: '',
    whatsapp: '',
    line: '',
  },
  // The form new members fill in. Any Google Form link works.
  joinFormUrl: '',
};

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/posts', label: 'Posts' },
  { href: '/team', label: 'Team' },
  { href: '/resources', label: 'Living in Osaka' },
  { href: '/contact', label: 'Contact' },
];

// Committee members. Order here is the order on the page.
export const team = [
  {
    name: 'Name Surname',
    role: 'President',
    affiliation: 'Osaka University',
    photo: '', // e.g. '/images/team/name.jpg' — blank shows initials instead
  },
  {
    name: 'Name Surname',
    role: 'Vice President',
    affiliation: 'Osaka Metropolitan University',
    photo: '',
  },
  {
    name: 'Name Surname',
    role: 'Events',
    affiliation: 'Kansai University',
    photo: '',
  },
  {
    name: 'Name Surname',
    role: 'Treasurer',
    affiliation: 'Osaka University',
    photo: '',
  },
];

export const whoWeAre = [
  {
    group: 'Students',
    note: 'Undergraduates and masters students across Osaka’s universities.',
  },
  {
    group: 'Researchers',
    note: 'PhD candidates, postdocs and visiting scholars.',
  },
  {
    group: 'Professionals',
    note: 'Engineers, doctors and staff working in and around Osaka.',
  },
  {
    group: 'Alumni',
    note: 'People who studied here and stayed in touch.',
  },
];
