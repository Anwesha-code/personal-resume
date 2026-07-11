# ✏️ Customization Guide

Every piece of content on the site comes from a JSON file in `/data`. You
never need to touch component code to add, remove, or edit a skill, project,
certificate, job, or link. Just edit the JSON, save, and (if running
locally) the dev server will hot-reload; on Vercel, push/redeploy.

A few ground rules for editing JSON:

- Keep the quotation marks `"..."` around text.
- Don't remove commas between items, and don't leave a trailing comma after
  the last item in a list.
- `id` values just need to be unique within their file — lowercase words
  with dashes is a safe convention (`"my-new-project"`).
- If you're not sure your JSON is valid, paste it into
  [jsonlint.com](https://jsonlint.com) before saving.

---

## `data/profile.json`

Your name, tagline, bio, and contact basics.

```json
{
  "displayName": "Anwesha Singh",
  "role": "Computer Science Undergraduate",
  "rotatingRoles": ["ML Pipeline Builder", "DevOps Automator", "..."],
  "tagline": "One-line hook shown under your name in the hero.",
  "summary": "Longer paragraph shown in the About section.",
  "email": "you@example.com",
  "resumeUrl": "/resume/Anwesha_Singh_Resume.pdf"
}
```

- **`rotatingRoles`**: add/remove as many strings as you like — they cycle
  automatically in the hero.
- **`resumeUrl`**: to swap your resume, drop a new PDF into
  `public/resume/` and update this path (e.g. `/resume/My_Resume_2027.pdf`).

---

## `data/socials.json`

Buttons/links for GitHub, LinkedIn, LeetCode, email, and your certificate
drive.

```json
{
  "id": "github",
  "label": "GitHub",
  "url": "https://github.com/your-username",
  "icon": "github",
  "showInHero": true
}
```

- **`icon`** must be one of: `github`, `linkedin`, `code` (used for
  LeetCode), `mail`, `folder`.
- **`showInHero`**: `true` shows the button in the hero's button row;
  `false` keeps it out of the hero (it will still appear in the footer).
- To add a new platform (e.g. Twitter/X), add a new object here **and** add
  a matching icon key in
  `src/components/ui/socialIconMap.ts` (one extra line, e.g.
  `twitter: Twitter` from `lucide-react`).

---

## `data/skills.json`

Two parts: `categories` (the filter pills) and `items` (the collectible
badges).

```json
{
  "id": "rust",
  "name": "Rust",
  "category": "programming",
  "icon": "🦀",
  "level": "Beginner",
  "description": "One or two sentences, ideally with a bit of personality."
}
```

- **`category`** must match one of the `id`s in the `categories` array
  above it. To add a whole new category (e.g. "Cloud"), add it to
  `categories` first, then use its `id` in your skill items.
- **`level`** must be exactly `"Beginner"`, `"Intermediate"`, or
  `"Advanced"` (this controls the dot indicator in the detail modal).
- **`icon`** is just an emoji — pick anything that feels right as a "loot
  item" for that skill.
- To remove a skill, delete its whole `{ ... }` object (and the comma
  before/after it, so the list stays valid).

---

## `data/projects.json`

Each project becomes a card + a detail modal.

```json
{
  "id": "my-new-project",
  "title": "Project Title",
  "tagline": "One punchy sentence.",
  "description": "A short paragraph — what it is and why it exists.",
  "tech": ["Python", "FastAPI"],
  "highlights": ["Bullet one", "Bullet two", "Bullet three"],
  "challenge": "The trickiest part of building this, and how you solved it.",
  "lesson": "What you'd do differently, or what you learned.",
  "github": "https://github.com/you/repo",
  "demo": "https://your-demo-link.com",
  "status": "Completed",
  "icon": "🚀"
}
```

- **`demo`** is optional — set it to `null` if there isn't a live link, and
  the button simply won't render.
- **`status`** is a free-text badge (`"Completed"`, `"In progress"`,
  `"Archived"`, whatever fits).
- Order in the file = order shown on the page. Reorder by cutting/pasting
  whole project objects.

---

## `data/experience.json` and `data/education.json`

These two files are automatically merged into one chronological "Journey"
timeline by `src/lib/utils.ts` (`getTimeline()`), using each item's numeric
**`order`** field — lower numbers appear first.

Experience item:

```json
{
  "id": "my-internship",
  "company": "Company Name",
  "role": "Your Role",
  "location": "City, State",
  "period": "Jun 2027 – Aug 2027",
  "icon": "🏢",
  "points": ["What you did", "What you shipped", "What you learned"],
  "certificateNote": "Optional note, e.g. a link mention to a completion cert.",
  "order": 6
}
```

Education item:

```json
{
  "id": "my-university",
  "institution": "University Name",
  "degree": "B.Tech in Computer Science",
  "period": "Expected 2028",
  "detail": "CGPA: 9.2",
  "highlight": "Optional achievement line, e.g. Dean's List",
  "icon": "🎓",
  "order": 3
}
```

**To add a new entry:** pick an `order` number that places it correctly
relative to everything else across *both* files (e.g. if your existing
orders are 1–5, a new internship that happened after all of them gets
`order: 6`). You don't need to renumber existing items unless you're
inserting something in the middle — in that case, just leave gaps (use
`order: 25`, `order: 35` etc.) so you rarely need to renumber at all.

---

## `data/certificates.json`

Same two-part shape as skills: `categories` + `items`.

```json
{
  "id": "my-cert",
  "title": "Certificate Name",
  "issuer": "Issuing Platform",
  "category": "cloud",
  "icon": "☁️"
}
```

`category` must match a `categories[].id` above it, same rule as skills.

The "View verification documents" button at the bottom of this section
links to whatever URL is set for `"id": "certificates-drive"` in
`data/socials.json` — update that one link and every certificate stays
pointed at your latest drive folder.

---

## `data/navigation.json`

The navbar links.

```json
{ "id": "blog", "label": "Blog", "href": "#blog" }
```

`href` should either be `#section-id` (matching a section's `id` attribute
in its component, e.g. `id="skills"`) or a full URL for an external link.

---

## `data/about.json`

The clickable "desk objects" in the About section.

```json
{
  "id": "guitar",
  "icon": "🎸",
  "label": "Guitar",
  "title": "Side quest",
  "content": "What you want visitors to learn when they click this object."
}
```

Add as many or as few as you like — the grid reflows automatically.

---

## `data/quotes.json`

A flat array of short strings shown one-at-a-time on the loading screen.
Add, remove, or rewrite freely.

---

## `data/settings.json`

Site-wide toggles and timing:

```json
{
  "siteTitle": "Anwesha Singh — Portfolio",
  "siteDescription": "Used for SEO / social share previews.",
  "idleCherryBlossomSeconds": 8,
  "idleChibiRestSeconds": 20,
  "cursorSparkles": true,
  "showDuckEasterEgg": true,
  "showLoader": true,
  "loaderMinDurationMs": 1600
}
```

- Raise `idleCherryBlossomSeconds` if petals feel like they start too soon.
- Set `cursorSparkles` or `showDuckEasterEgg` to `false` to turn those
  easter eggs off entirely without deleting any code.
- `loaderMinDurationMs` controls how long the splash screen stays up at
  minimum (in milliseconds).

---

## 🎨 Changing colors or fonts

All colors live as named tokens in `tailwind.config.ts` under
`theme.extend.colors` (e.g. `blush`, `petal`, `lavender`, `mint`, `cocoa`,
`plum`, `butter`). Change a hex value there and it updates everywhere that
color is used (`bg-petal`, `text-cocoa`, etc.).

Fonts are loaded in `src/app/layout.tsx` via `next/font/google`. To swap a
typeface, change the imported font name and its `variable` name stays the
same, so no other files need updates — e.g. swap `Fredoka` for another
Google Font by changing the import and the function call.

---

## 🖱️ Changing the cursor

Replace `public/cursor/cursor-default.svg` and
`public/cursor/cursor-pointer.svg` with your own small (≈24×24) SVGs to
change the custom cursor look. The cursor "hotspot" (the exact pixel that
represents the click point) is set in `src/app/globals.css` via the two
numbers after each `url(...)`, e.g. `4 4` — adjust if your new cursor image
has the pointer tip somewhere else.

---

## 🐛 Something looks broken after an edit

95% of the time this is a JSON syntax issue (a missing comma, or an extra
comma after the last item). Copy the file's contents into
[jsonlint.com](https://jsonlint.com) — it will tell you exactly which line
has the problem.
