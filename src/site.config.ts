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
  email: 'osakaindian@gmail.com',
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
    name: 'Vidhan Kashyap',
    role: 'President',
    affiliation: 'The University of Osaka',
    photo: '', // e.g. '/images/team/name.jpg' — blank shows initials instead
  },
  {
    name: 'Name Surname',
    role: 'Vice President',
    affiliation: 'The University of Osaka',
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
    affiliation: 'The University of Osaka',
    photo: '',
  },
];

export const whoWeAre = [
  {
    group: 'Students',
    note: 'Students pursuing undergraduate, graduate, and research programs at universities across Osaka and the Kansai region. Prospective students and newcomers looking for practical information and connections before and after arriving in Japan.',
  },
  {
    group: 'Researchers',
    note: 'Researchers, Doctors and academics working at universities and research institutions.',
  },
  {
    group: 'Professionals',
    note: 'Working professionals from a wide range of industries and backgrounds.',
  },
  {
    group: 'Alumni',
    note: 'Alumni who continue to contribute to and support the Indian community in Osaka. People who studied here and stayed in touch.',
  },
];
