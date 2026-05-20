# ✦ Nirmaan — AI Internship Platform
### v3.0 · Made in India 🇮🇳

> **Democratizing internship access for every student in India.**

Nirmaan uses semantic AI to match students with internships based on skills, projects, and potential — not just keywords or college pedigree. Built as a complete career operating system: from profile to placement. Companies get a fully separate hiring dashboard with AI-ranked candidates.

---

## 🚀 Features

### For Students
| Feature | Description |
|---|---|
| 🤖 **AI Matching** | Sentence Transformers + cosine similarity across 40+ dimensions — every internship gets a personalised match score |
| 📊 **Skill Gap Analyzer** | Compares your skills vs. role requirements; recommends curated courses to close every gap |
| 🗺️ **Career Roadmap** | Week-by-week personalised plan from profile-building to landing your first offer |
| 📄 **Resume Builder** | Live AI-assisted resume editor with real-time preview and one-click PDF export |
| 🤝 **Networking Hub** | Connect with seniors, alumni, and professionals at target companies for referrals and advice |
| 🎙️ **Arya AI Assistant** | Voice-enabled career chatbot — interview prep, salary info, DSA tips, and full platform navigation in English or Hindi |
| 🔖 **Saved & Applied** | Track saved internships and application status in one place |
| 🔔 **Smart Notifications** | In-app alert feed with match updates, company views, application status, and career tips |

### For Companies
| Feature | Description |
|---|---|
| ➕ **Post Internships** | Create listings with role, stipend, skills, perks, and deadlines |
| 👥 **AI Candidate Ranking** | Browse candidates automatically ranked by AI match score for your specific role |
| 📈 **Analytics** | Platform-level insights on applications, shortlists, and match quality |
| 🏢 **Employer Profile** | Company page visible to 10,000+ active students, with industry, size, culture, and perks |

### For Admins
| Feature | Description |
|---|---|
| 🛡️ **User Management** | View, edit, suspend, or impersonate any user account |
| 💼 **Internship Management** | Moderate listings across all company partners |
| 🤖 **AI Engine Monitor** | Live stats on the embedding model, vector DB, query latency, and accuracy |

---

## 🗂️ Project Structure

```
nirmaan/
├── index.html            # Splash / loading screen → auto-redirects to nirmaan.html
├── nirmaan.html          # App shell — links CSS and JS (18 lines)
├── nirmaan.css           # All styles: design tokens, components, dark mode, responsive (~450 lines)
├── nirmaan.js            # Full application: state, routing, page builders, auth, chat, voice (~3000 lines)
├── nirmaan-chatbot.html  # Standalone chatbot popup (opened via nirmaan-chat-opener.html)
├── nirmaan-chat-opener.html  # Launcher page for the popup chatbot
└── nirmaan-loader.html   # Alternate loader screen
```

> All files can live in the same directory. Open `index.html` (or `nirmaan.html` directly) in any modern browser — no build step required.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Language | Vanilla JS — zero dependencies, no build step |
| Styling | CSS Custom Properties — full dark/light theme via `data-theme` |
| AI Matching | Simulated Sentence Transformers + cosine similarity |
| Voice | Web Speech API — voice input and TTS for Arya assistant |
| Fonts | Clash Display (headings) · General Sans (body) via Google Fonts |
| PWA | `apple-mobile-web-app-capable`, `theme-color`, `viewport-fit=cover` |

---

## 🎭 Demo Roles

Open the app → **Login** to instantly try any role — no registration needed:

| Role | Email | What you'll see |
|---|---|---|
| 🎓 Student | `student@test.com` | Dashboard, AI matches, skill gap, roadmap, resume, networking |
| 🏢 Company | `hr@techcorp.com` | Post internships, AI-ranked candidate shortlist |
| 🛡️ Admin | `admin@nirmaan.in` | User management, internship control, AI engine stats |

There is also a **5-second auto-login** countdown on the login page for quick demo access.

---

## 🔐 Sign Up Flow

Nirmaan has **two completely separate sign-up paths** that branch at Step 2:

### Student Path (7 Steps)
| Step | Content |
|---|---|
| 1 — Account | Name, email, phone, password (with live strength meter + criteria checklist), email OTP verification |
| 2 — Role | Choose Student; set city and preferred work mode |
| 3 — Academic | Degree, major, college, year, CGPA, experience level |
| 4 — Skills | Technical skill tags, areas of interest, duration and stipend preferences |
| 5 — Portfolio | LinkedIn, GitHub, portfolio URL, project list, resume upload |
| 6 — Extras | Certifications, optional message to companies |
| 7 — Review | AI pre-analysis, profile score, top match preview, summary |

### Company Path (5 Steps)
| Step | Content |
|---|---|
| 1 — Account | Name, email, phone, password (with live strength meter), email OTP verification |
| 2 — Role | Choose Company / Recruiter; set headquarters city; feature overview |
| 3 — Company Info | Company name, industry, size, website, description, LinkedIn |
| 4 — Hiring Needs | Roles typically hired for (tag picker), work mode, stipend range, perks & benefits, headcount |
| 5 — Review | Employer profile preview, candidate pool stats, summary |

**Password security on Step 1:**
- Live strength bar (Too short → Weak → Fair → Good → Strong)
- 5 criteria checklist: 8+ characters, Uppercase, Lowercase, Number, Symbol — each shows ○ / ✓ in real time
- "Passwords do not match" inline message on the confirm field
- Fields survive OTP send/verify — no data loss on re-render

---

## 📱 Mobile Support

Nirmaan is fully optimised for mobile with a dedicated bottom navigation bar and mobile-specific bottom-sheet drawers.

### Bottom Navigation Bar
After login, the mobile nav shows:
- ⚡ Home (Dashboard)
- ✨ Matches (Top Match page)
- 📊 Skills (Skill Gap)
- 🗺️ Roadmap
- 🔔 Alerts (Notification bottom sheet)
- ☰ More (slide-up drawer)

### More Drawer (☰)
Opens as a smooth slide-up bottom sheet with:
- Resume, Networking, Saved, Profile links
- Language toggle (English ↔ हिन्दी)
- Dark / Light mode toggle
- Logout (red)
- Close button (×) and tap-backdrop-to-dismiss

### Notifications Bottom Sheet (🔔)
Full-height scrollable bottom sheet with:
- Unread count badge
- Mark All Read button
- Each notification: icon, title, body, timestamp, dismiss (×)
- Notification Settings link

### Top Matches Page
- Filter bar scrolls **horizontally** — no overflow or wrapping on narrow screens
- Perfect Matches grid is **single column** on mobile
- Job title truncates with ellipsis — no card overflow
- Apply button expands to full width on mobile; Save / Gap / Company share a second row
- Compact pills and skill tags that wrap cleanly

### General Mobile Optimisations
- Native bottom nav (context-aware: public vs. dashboard pages)
- Horizontally scrollable metric cards on the dashboard
- Bottom-sheet modals on small screens
- iOS safe area insets (`env(safe-area-inset-*)`) for notch and home indicator
- `font-size: 16px` on all inputs to prevent iOS auto-zoom
- `touch-action: manipulation` — eliminates 300 ms tap delay
- Chat FAB repositioned above the bottom nav bar

---

## 🌙 Dark Mode

Click the 🌙 icon in the nav (or in the More drawer on mobile) to toggle dark mode. The theme applies instantly via `data-theme="dark"` on the root element — all colours are CSS variables, so zero flicker.

---

## 🌐 Bilingual (English / Hindi)

Full i18n support. Every visible string is key-mapped in a `T` object with `en` and `hi` entries. Switch language from:
- The nav bar (desktop)
- The More drawer (mobile)
- The language popup shown on first visit

---

## 🗺️ Page Map

```
/           → Splash loader (index.html) → auto-redirects after 2.8 s
/home       → Hero, features, stats, CTA, footer
/login      → Role selector (Student / Company / Admin), 5s auto-login, Google OAuth button
/signup     → 7-step student onboarding OR 5-step company onboarding (branches at step 2)
/dash       → Student dashboard: metrics, matches, activity chart, AI insights
/recs       → AI-ranked internship recommendations with filters + perfect/other match sections
/skillgap   → Skill radar, gap analysis, course recommendations
/roadmap    → Week-by-week career plan with progress tracking
/resume     → Live resume builder with preview pane
/network    → Networking hub: connect with professionals, send messages
/saved      → Saved internships
/profile    → Edit profile, skills, projects, certifications
/codash     → Company dashboard: post internship, candidate pipeline
/admin      → Admin panel: users, internships, analytics, AI engine stats
/about      → Team and mission
/contact    → Contact form + office details
```

---

## ⚙️ Getting Started

No install. No build. Just open the file:

```bash
# Clone or download all files into one folder, then:
open index.html

# Or serve locally for best results:
python3 -m http.server 8080
# then visit http://localhost:8080
```

Any static server works for local dev — VS Code Live Server, `npx serve`, `npx http-server`, etc.

---

## 🐛 Known Fixes in v3.0

| Issue | Fix |
|---|---|
| Sign-up fields reset on OTP send/verify | All step-1 values (including passwords) saved to state before every `render()` and restored via JS after DOM rebuild |
| Password fields always blank after re-render | Browsers block `value=""` attr on `type=password` — now restored via `element.value = S.pw` in JS post-render |
| More button not working on mobile | Eliminated `render()` from toggle; drawer is always in DOM, shown/hidden via CSS class + JS — no race with global click handler |
| Notification panel broken on mobile | Desktop dropdown hidden on mobile via CSS; replaced with a dedicated bottom-sheet drawer wired in `attachEv()` |
| Top Matches page overflowing on mobile | Single-column grid, horizontal filter scroll, ellipsis truncation, full-width apply button |
| Company signup identical to student | Step 2 now branches: company gets 5-step flow (Company Info → Hiring Needs → Review) instead of student's 7-step academic flow |

---

## 📄 License

MIT — free to use, modify, and distribute.

---

*Built with ♥ for every student in India chasing their first break.*
