# ✦ Nirmaan — AI Internship Platform

> **Democratizing internship access for every student in India.**

Nirmaan uses semantic AI to match students with internships based on skills, projects, and potential — not just keywords or college pedigree. Built as a complete career operating system: from profile to placement.

---

## 🚀 Features

### For Students
| Feature | Description |
|---|---|
| 🤖 **AI Matching** | Sentence Transformers + cosine similarity across 40+ dimensions gives each internship a personalised match score |
| 📊 **Skill Gap Analyzer** | Compares your skills vs. role requirements and recommends curated courses to close every gap |
| 🗺️ **Career Roadmap** | Week-by-week personalised plan from profile-building to landing your first offer |
| 📄 **Resume Builder** | Live AI-assisted resume editor with real-time preview and one-click PDF export |
| 🤝 **Networking Hub** | Connect with seniors, alumni, and professionals at target companies for referrals and advice |
| 🎙️ **Arya AI Assistant** | Voice-enabled career chatbot — interview prep, salary info, DSA tips, and full platform navigation in English or Hindi |
| 🔖 **Saved & Applied** | Track saved internships and application status in one place |

### For Companies
| Feature | Description |
|---|---|
| ➕ **Post Internships** | Create listings with role, stipend, skills, perks, and deadlines |
| 👥 **AI Candidate Ranking** | Browse candidates automatically ranked by AI match score for your role |
| 📈 **Analytics** | Platform-level insights on applications, shortlists, and match quality |

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
├── nirmaan.html   # Entry point — links CSS and JS, 18 lines
├── nirmaan.css    # All styles: design tokens, components, dark mode, responsive
└── nirmaan.js     # Full application: state, data, page builders, auth, chat, voice
```

> All three files must be in the same directory. Open `nirmaan.html` in any modern browser.

---

## 🛠️ Tech Stack

- **Vanilla JS** — zero dependencies, no build step, runs directly in the browser
- **CSS Custom Properties** — full dark/light theme switching via `data-theme`
- **Semantic AI** (simulated) — Sentence Transformers + cosine similarity match logic
- **Web Speech API** — voice commands and text-to-speech for Arya assistant
- **Google Fonts** — Clash Display (headings) + General Sans (body)

---

## 🎭 Demo Roles

Open the app and go to **Login** to instantly try any role — no registration needed:

| Role | Email | What you'll see |
|---|---|---|
| 🎓 Student | `student@test.com` | Dashboard, AI matches, skill gap, roadmap, resume, networking |
| 🏢 Company | `hr@techcorp.com` | Post internships, AI-ranked candidate shortlist |
| 🛡️ Admin | `admin@nirmaan.in` | User management, internship control, AI engine stats |

---

## 📱 Mobile Support

- Native bottom navigation bar (context-aware: public vs. dashboard pages)
- "More" drawer for secondary dashboard links
- Horizontally scrollable metric cards on the dashboard
- Bottom-sheet modals on small screens
- iOS safe area insets (`env(safe-area-inset-*)`) for notch and home indicator
- `font-size: 16px` on inputs to prevent iOS auto-zoom
- `touch-action: manipulation` on all interactive elements (eliminates 300ms tap delay)
- PWA meta tags (`apple-mobile-web-app-capable`, `theme-color`, `viewport-fit=cover`)

---

## 🌙 Dark Mode

Click the 🌙 icon in the nav (or in the sidebar's Account section) to toggle dark mode. Theme is applied instantly via `data-theme="dark"` on the root element, with all colours driven by CSS variables.

---

## 🗺️ Page Map

```
/ Home          → Hero, features, CTA, footer
/login          → Role selector (Student / Company / Admin), auto-login, Google OAuth
/signup         → 7-step onboarding with email OTP verification
/dash           → Student dashboard: metrics, matches, activity chart, AI insights
/recs           → AI-ranked internship recommendations with filters
/skillgap       → Skill radar, gap analysis, course recommendations
/roadmap        → Week-by-week career plan with progress tracking
/resume         → Live resume builder with preview pane
/network        → Networking hub: professionals, connect, message
/saved          → Saved internships
/profile        → Edit profile, skills, projects, certifications
/codash         → Company dashboard: post internship, candidate pipeline
/admin          → Admin panel: users, internships, analytics, AI engine
/about          → Team and mission
/contact        → Contact form + office details
```

---

## ⚙️ Getting Started

No install. No build. Just open the file:

```bash
# Clone or download the three files, then:
open nirmaan.html
# or
python3 -m http.server 8080   # then visit http://localhost:8080/nirmaan.html
```

For local development with live reload, any static server works (VS Code Live Server, `npx serve`, etc.).

---

## 📄 License

MIT — free to use, modify, and distribute.

---
