const TZ = 'Asia/Tokyo';
const JST_OFFSET = 9 * 60 * 60 * 1000;

export function day(d: Date) {
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', timeZone: TZ }).format(d);
}

export function month(d: Date) {
  return new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: TZ }).format(d);
}

export function year(d: Date) {
  return new Intl.DateTimeFormat('en-GB', { year: 'numeric', timeZone: TZ }).format(d);
}

export function weekdayDate(d: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: TZ,
  }).format(d);
}

export function time(d: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: TZ,
  }).format(d);
}

export function isUpcoming(start: Date, end?: Date, now = new Date()) {
  const last = end ?? start;
  const jst = new Date(last.getTime() + JST_OFFSET);
  const endOfDay =
    Date.UTC(jst.getUTCFullYear(), jst.getUTCMonth(), jst.getUTCDate() + 1) - JST_OFFSET;
  return now.getTime() < endOfDay;
}

const RELATIVE_UNITS: [number, Intl.RelativeTimeFormatUnit][] = [
  [60, 'second'],
  [60, 'minute'],
  [24, 'hour'],
  [7, 'day'],
  [4.345, 'week'],
  [12, 'month'],
  [Infinity, 'year'],
];

// "3 days ago", "an hour ago" — used for posts, not events, since posts
// don't have a single obviously-relevant timestamp the way an event's
// start time is.
export function relative(d: Date) {
  let value = (Date.now() - d.getTime()) / 1000;
  let unit: Intl.RelativeTimeFormatUnit = 'second';
  for (const [amount, name] of RELATIVE_UNITS) {
    if (Math.abs(value) < amount) {
      unit = name;
      break;
    }
    value /= amount;
    unit = name;
  }
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-Math.round(value), unit);
}
