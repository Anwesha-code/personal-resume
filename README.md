# Anwesha Singh — Portfolio 🌸

A cozy, pastel, pixel-and-manhwa-inspired personal portfolio built with Next.js
(App Router), TypeScript, Tailwind CSS, and Framer Motion. Every section is
wrapped in a little retro-desktop "window" (Inventory.exe, Quests.exe,
Journey.exe, Badges.exe, Mailbox.exe...), with a hand-drawn chibi character,
a chihuahua companion, cherry blossoms, a waddling duck, and a custom pixel
cursor throughout.

**None of your content is hardcoded into components.** Everything — your
bio, skills, projects, experience, education, certificates, nav links, and
socials — lives in plain JSON files under `/data`. See **`CUSTOMIZATION.md`**
for exactly how to edit them.

---

## ✨ What's included

- Animated hero with a hand-illustrated SVG chibi (breathing, blinking, click
  reactions, and a sleepy "resting" state after inactivity)
- Cherry blossoms that drift down after the cursor sits idle for a few seconds
- A clickable duck easter egg that waddles across the screen
- A custom pixel cursor (with a different cursor on hover over links/buttons)
- A splash-screen loader with a rotating "tip"
- An interactive "bedroom" About section — click objects to reveal facts
- Skills shown as collectible badges, filterable by category, with a detail
  modal
- Projects shown as mini "quest" cards with a full detail modal (tech stack,
  challenge solved, lesson learned, GitHub + demo links)
- A merged Education + Experience timeline ("Journey"), sorted automatically
  by an `order` field in the data
- Certificates as a sortable, clickable badge case, linking out to your
  verification drive
- A cute mailbox contact form (opens the visitor's email client, pre-filled —
  no backend/API keys required)
- Full keyboard navigation, visible focus states, `prefers-reduced-motion`
  support, and semantic landmarks
- SEO metadata, Open Graph tags, `robots.txt` and `sitemap.xml`

### Reasonable scope notes

Some of the more elaborate ideas from mood-board references (Konami code,
night/rain/snow modes, background music, daily achievements) were **not**
built in this first pass, to keep the codebase focused and genuinely
polished rather than half-finished everywhere. The architecture (modular
data files, small components, shared `PixelWindow`/`Modal`/`PixelGrid`
building blocks) is set up so any of those can be added later as a single
new component — ask and it can be added, or see the file structure below for
where it would live.

---

## 🧱 Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom pastel design tokens in `tailwind.config.ts`)
- **Framer Motion** for animation
- **lucide-react** for UI icons
- Plain **JSON** for all content — no CMS, no database

---

## 🚀 Getting started locally

You'll need [Node.js](https://nodejs.org) 18.18+ (Node 20 or 22 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To check that everything builds cleanly for production:

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel (free)

**Option A — via GitHub (recommended):**

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Import your GitHub repo. Vercel auto-detects Next.js — no config needed.
4. Click **Deploy**. You'll get a free `your-project.vercel.app` URL.
5. Every future push to your main branch redeploys automatically.

**Option B — via the Vercel CLI:**

```bash
npm i -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

No environment variables are required for the current feature set (the
contact form uses a `mailto:` link, not a backend email service).

---

## 📁 Project structure

```
data/                    ← ALL editable content lives here (see CUSTOMIZATION.md)
  profile.json           ← name, tagline, summary, resume path, contact info
  socials.json           ← GitHub / LinkedIn / LeetCode / email / drive links
  skills.json            ← skill "collectibles" + categories
  projects.json          ← project cards + modal detail content
  experience.json        ← internships
  education.json         ← schools/university
  certificates.json      ← certificate badges + categories
  navigation.json         ← navbar links
  about.json             ← clickable "desk object" facts
  quotes.json             ← rotating loader tips
  settings.json           ← site title/description + timing/feature toggles

public/
  resume/                ← your downloadable resume PDF
  cursor/                ← custom pixel cursor SVGs
  favicon.svg

src/
  app/                   ← Next.js App Router pages, layout, SEO routes
  components/
    layout/              ← Navbar, Footer
    hero/                ← Hero section + ChibiCharacter
    about/                ← interactive "bedroom" section
    skills/               ← skill badges + filters + modal
    projects/             ← project cards + modal
    timeline/             ← merged education/experience "journey"
    certificates/         ← certificate badges + filters + modal
    contact/               ← mailbox + form
    effects/              ← CherryBlossoms, CursorSparkle, DuckCompanion, FloatingDecor
    loader/                ← splash screen
    ui/                    ← shared PixelWindow, Modal, SectionHeading, PixelGrid/icons
  hooks/                  ← useIdle (inactivity detection)
  lib/                    ← utils (timeline merge/sort, etc.)
  types/                  ← shared TypeScript types matching the JSON shapes
```

---

## 🎨 Design system quick reference

Colors, fonts, and animation timings are defined once in `tailwind.config.ts`
and `src/app/globals.css`. See `CUSTOMIZATION.md` for how to retheme.

- **Fonts:** Fredoka (headings), Quicksand (body), Pixelify Sans (accents),
  Silkscreen (retro-OS chrome labels) — all loaded via `next/font/google`,
  self-hosted at build time (no external font requests at runtime).
- **Palette:** cream, blush pink, petal pink, lavender, mint, cocoa (ink),
  plum (secondary text), butter (highlight).

---

## ♿ Accessibility

- Every interactive element has visible keyboard focus (`focus-ring`)
- A "Skip to main content" link appears on keyboard focus
- `prefers-reduced-motion` disables/shortens all animation
- Decorative effects (clouds, petals, sparkles, the duck) are
  `aria-hidden` and never intercept clicks or tab order
- Modals trap `Escape` to close and use proper `role="dialog"` /
  `aria-modal` / `aria-labelledby`

---

## 🙋 Credits

Built for Anwesha Singh. Chibi character, pixel icons (tree, cloud, heart,
star, duck, cherries, bow, petals), and mailbox illustration are original
SVG/code assets created for this project — no external image or font
licenses to worry about.
