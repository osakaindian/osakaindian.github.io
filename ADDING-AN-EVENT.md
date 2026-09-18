# Adding an event

You do not need to install anything or understand the code. You can do this
from github.com in a browser, on a phone if you have to.

## The steps

1. Go to the repository, open the folder `src/content/events/`.
2. Click **Add file → Create new file**.
3. Name it something like `2027-03-holi.md`. Lower case, dashes instead of
   spaces, ending in `.md`. This name becomes the web address:
   `/events/2027-03-holi/`.
4. Paste the template below and edit it.
5. Scroll down, write a short note like "Add Holi 2027", and click
   **Commit changes**.

The site rebuilds itself. Give it two or three minutes, then refresh the page.

## Template

```markdown
---
title: Holi in the park
date: 2027-03-13T11:00
endTime: "15:00"
venue: Utsubo Park, Nishi-ku
mapUrl: https://maps.google.com/?q=Utsubo+Park
summary: Colours, snacks and a speaker someone will inevitably unplug.
cover: /images/holi-2027.jpg
registerUrl: https://forms.gle/xxxxx
draft: false
---

Write the details here in normal sentences. Blank lines separate paragraphs.

## You can add headings like this

- And bullet points
- Like these

Bring white clothes you don't mind ruining.
```

## What each line means

| Line | Required? | Notes |
| --- | --- | --- |
| `title` | yes | Shown everywhere. Keep it short. |
| `date` | yes | `YYYY-MM-DDTHH:MM`, 24-hour, Japan time. `T` between date and time. |
| `endTime` | no | Just the time in quotes, e.g. `"15:00"`. |
| `venue` | yes | Plain text. |
| `mapUrl` | no | Any Google Maps link. Makes the venue clickable. |
| `summary` | yes | One sentence. Appears in the events list and in search results. |
| `cover` | no | A photo you uploaded to `public/images/`. |
| `registerUrl` | no | Google Form, ticket page, chat invite. |
| `draft` | yes | `true` hides it while you write. Set to `false` to publish. |

## Things that break the build

- Forgetting one of the three dashes `---` at the top or bottom.
- A colon inside a title without quotes. Write `title: "Diwali: the big one"`.
- A date like `24-10-2026`. It must be `2026-10-24T17:00`.

If a commit breaks the build, the site keeps showing the previous version —
nothing goes down. The Actions tab will show a red mark explaining what went
wrong.

## Past events

You don't move them anywhere. Once the date passes, an event drops off
"Upcoming" and appears under "Past events", grouped by year, on its own. Adding
photos afterwards is a good habit — edit the same file and add a `cover`.
