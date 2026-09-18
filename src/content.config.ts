import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Categories for the Posts board. Add or rename one here and it updates
// the filter tabs and the set of valid values for a post's frontmatter
// everywhere at once — a typo'd category fails the build with a clear
// error instead of silently vanishing from the site.
export const postCategories = [
  { slug: 'announcements', label: 'Announcements' },
  { slug: 'jobs', label: 'Jobs & Internships' },
  { slug: 'scholarships', label: 'Scholarships' },
  { slug: 'community', label: 'Community Board' },
] as const;

const postCategorySlugs = postCategories.map((c) => c.slug) as [string, ...string[]];

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    // Date and time the event starts. Format: 2026-11-07T18:00
    date: z.coerce.date(),
    // Optional end time, shown as "18:00 – 21:00"
    endTime: z.string().optional(),
    venue: z.string(),
    // A Google Maps link, if you have one.
    mapUrl: z.string().url().optional(),
    // One line shown in the events list.
    summary: z.string(),
    cover: z.string().optional(),
    // Registration form, ticket page, or LINE/WhatsApp invite.
    registerUrl: z.string().url().optional(),
    // Set to true while you're still writing it. Drafts never appear on the site.
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(postCategorySlugs),
    author: z.string().default('OIA Committee'),
    summary: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { events, posts };
