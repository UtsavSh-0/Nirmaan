# ✦ Nirmaan — AI Internship Platform

> **AI-powered internship matching for every student in India.**
> Version 3.0 · Made in India 🇮🇳 · PWA · Bilingual (EN / हिंदी)

---

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Features](#features)
4. [Pages & Navigation](#pages--navigation)
5. [Global Search](#global-search)
6. [AI Chatbot (Arya)](#ai-chatbot-arya)
7. [Accessibility Widget](#accessibility-widget)
8. [PWA & Service Worker](#pwa--service-worker)
9. [Push Notifications](#push-notifications)
10. [Bilingual Support](#bilingual-support)
11. [Dark Mode](#dark-mode)
12. [Onboarding Tour](#onboarding-tour)
13. [Admin Panel](#admin-panel)
14. [Company Dashboard](#company-dashboard)
15. [Getting Started](#getting-started)
16. [Keyboard Shortcuts](#keyboard-shortcuts)
17. [Browser Support](#browser-support)
18. [Changelog](#changelog)

---

## Overview

Nirmaan is a fully client-side, single-page web application that helps Indian students find AI-ranked internship opportunities tailored to their skills, education, and career goals. It runs entirely in the browser with no backend required — all data, state, and AI logic is handled in JavaScript.

**Key design principles:**
- Zero backend dependency — ships as static HTML/CSS/JS files
- Mobile-first, PWA-installable
- Fully bilingual (English + Hindi) with one-click language switching
- Accessible (WCAG-conscious, screen reader hints, full accessibility widget)

---

## File Structure

```
nirmaan/
├── index.html              # Splash / loading screen → redirects to nirmaan.html
├── nirmaan.html            # Main app shell (injects chat modal, hero animations, a11y widget)
├── nirmaan.js              # All app logic, state, page builders, data (~4100 lines)
├── nirmaan.css             # All styles including global search overlay, dark theme
├── nirmaan-chatbot.html    # Standalone chatbot popup window
├── nirmaan-chat-opener.html# Demo page to launch chatbot in a popup
├── nirmaan-loader.html     # Reusable loader animation page
├── manifest.json           # PWA manifest (icons, shortcuts, display mode)
├── sw.js                   # Service Worker (caching + push notifications)
└── icons/
    ├── icon-72.png … icon-512.png
    └── badge-72.png
```

---

## Features

### Core Platform
| Feature | Description |
|---|---|
| **AI Matching** | Internships ranked by percentage match against the user's skills, interests, and profile |
| **Skill Gap Analysis** | Identifies missing skills for top internship matches; recommends courses |
| **Career Roadmap** | Week-by-week personalised plan from profile setup to landing an offer |
| **Resume Builder** | AI-assisted resume creation with ATS optimisation tips |
| **Networking Hub** | Connect with alumni, seniors, and professionals for referrals |
| **Saved Internships** | Bookmark and track applied/saved listings |
| **Smart Apply** | One-tap application with personalised message suggestions |
| **Job Alerts** | Push notification alerts for new matching internships |

### Platform-Wide
| Feature | Description |
|---|---|
| **Global Search** | Ctrl+K overlay searches internships + pages from anywhere in the app |
| **AI Chatbot (Arya)** | Bilingual voice + text assistant embedded in the app |
| **Accessibility Widget** | Font size, contrast, dyslexia font, TTS, reduced motion, and more |
| **Dark Mode** | Full dark theme toggle, persisted in localStorage |
| **Bilingual UI** | English ↔ Hindi toggle, persisted per session |
| **PWA Install** | Installable as a native-feeling app on Android, iOS, and desktop |
| **Push Notifications** | Admin-sent push alerts reach users even when app is closed |
| **Onboarding Tour** | Guided spotlight tour for new users (student and company flows) |
| **Rewards** | Gamified achievement badges and milestones |

---

## Pages & Navigation

### Desktop Sidebar (logged-in users)
- ⚡ Dashboard
- ✨ AI Matches
- 📊 Skill Gap
- 🗺️ Career Roadmap
- 📄 Resume Builder
- 🤝 Networking Hub
- 🔖 Saved
- 👤 Profile

### Mobile Bottom Navigation (logged-in users)
- ⚡ Home (Dashboard)
- ✨ Matches
- 📊 Skills
- 🔍 **Search** ← accessible from every page
- 🗺️ Roadmap
- ☰ More (drawer with remaining pages)
- 🔔 Alerts

### Public Pages
- 🏠 Home (landing page with hero, stats, features)
- ℹ️ About
- ✉️ Contact
- 🔑 Login
- 📝 Sign Up (multi-step: 7 steps for students, 6 for companies)
- 📲 Install App

---

## Global Search

Accessible from **every page and every screen size**.

### How to open
| Method | Action |
|---|---|
| Desktop nav | Click the 🔍 icon in the top-right nav bar |
| Mobile bottom nav | Tap the 🔍 Search button |
| Keyboard | `Ctrl+K` (Windows/Linux) or `Cmd+K` (Mac) |

### What it searches
- **Internships** — by title, company, skills, field, location, and match percentage
- **Pages & features** — Dashboard, Skill Gap, Roadmap, Resume Builder, Networking Hub, Saved, Profile

### Behaviour
- Empty query shows Quick Jump shortcuts + top internships
- Typing filters both categories live
- Clicking an internship result navigates to AI Matches with the query pre-filled
- Clicking a page result navigates directly to that page
- **Arrow keys** navigate the result list; **Enter** opens the first (or focused) result
- **Escape** closes the overlay
- Full dark mode and mobile support

---

## AI Chatbot (Arya)

An embedded bilingual voice + text assistant available on every page.

### Opening the chatbot
- Click the 💬 floating action button (bottom-right corner)
- Click the 🎙️ microphone icon in the top nav to open chat and activate voice immediately

### Features
- **Bilingual** — auto-detects the app's current language (EN/हिंदी) and responds accordingly
- **Voice input** — uses Web Speech API (`webkitSpeechRecognition`) for hands-free queries
- **Voice output** — reads bot replies aloud via `SpeechSynthesis`
- **Keyword knowledge base** — covers internships, skills, resume, roadmap, networking, coding, platform features
- **Mobile layout** — full-screen bottom sheet on mobile; floating panel on desktop

### Standalone mode
Open `nirmaan-chatbot.html` directly, or use `nirmaan-chat-opener.html` to launch it as a compact popup window (420×600 px).

---

## Accessibility Widget

A floating ♿ button (bottom-left) opens a full accessibility settings panel.

### Options
| Setting | Effect |
|---|---|
| Font Size | Scales from 80% to 150% in 10% steps |
| High Contrast | `filter: contrast(1.55)` on the entire page |
| Invert Colours | `filter: invert(1) hue-rotate(180deg)` |
| Dyslexia-Friendly Font | Switches to Arial with increased letter/word spacing |
| Line Spacing | Sets `line-height: 2.1` globally |
| Highlight Links | Outlines all clickable elements in amber |
| Reduce Motion | Sets all animation durations to 0.001 ms |
| Large Cursor | Custom SVG cursor |
| Text to Speech | Click any heading or paragraph to hear it read aloud |

All settings persist in `localStorage` under the key `nirmaan_a11y`. The badge on the ♿ button shows how many options are currently active.

---

## PWA & Service Worker

Nirmaan is a fully installable Progressive Web App.

### Install flow
1. Visit the app in Chrome/Edge/Safari
2. Click **📲 Install App** in the top nav, or use the browser's native install prompt
3. The app installs to the home screen / taskbar with standalone display mode

### Service Worker (`sw.js`) — v3.1
- **Pre-caches** core shell files on install: `index.html`, `nirmaan.html`, `nirmaan.css`, `nirmaan.js`
- **Network-first** fetch strategy with cache fallback for offline support
- **Cache versioning** — old caches (`nirmaan-v*`) are cleaned on activate
- Handles push events and notification click routing

### PWA Shortcuts (manifest)
- **AI Matches** → `nirmaan.html#recs`
- **Skill Gap** → `nirmaan.html#skillgap`

---

## Push Notifications

### User-facing
- Users can grant push permission from the dashboard notification banner
- Notifications are shown even when the app is closed (via Service Worker)
- Clicking a notification opens the app and navigates to the relevant page

### Admin push (from Admin Panel)
Admins can compose and send push notifications to all users:
1. Go to **Admin → Push Notifications** tab
2. Fill in title, body, icon emoji, and target URL
3. Click **Send Now**

The Service Worker relays the push to all open client windows and shows a system notification for closed tabs.

---

## Bilingual Support

The entire UI is available in **English** and **Hindi**.

- Language is chosen on first visit via a language selection popup
- Switch at any time via the 🌐 globe button (desktop nav or mobile nav)
- Persisted in `localStorage` as `nirmaan_lang`
- All strings including chatbot responses, tour text, form labels, error messages, and navigation are translated

---

## Dark Mode

- Toggle via the 🌙 / ☀️ button in the top nav
- Persisted in `localStorage` as `nirmaan_dark`
- Implemented via `data-theme="dark"` on `<html>` with CSS custom properties
- All components — including the global search overlay, chatbot, accessibility panel, and notifications — support dark mode

---

## Onboarding Tour

A guided spotlight tour launches automatically for new users after login/signup.

- **Student tour** — 6 steps covering the dashboard, AI matches, skill gap, roadmap, resume builder, and networking hub
- **Company tour** — covers the company dashboard, posting internships, and reviewing candidates
- Spotlight highlights the relevant UI element; overlay dims the rest
- Can be skipped at any step; re-triggerable from the profile/settings area

---

## Admin Panel

Accessible to users with the `admin` role at `/admin` (or `go('admin')`).

### Tabs
- **Users** — view, edit, suspend, or impersonate any user account; export user list
- **Internships** — manage all internship listings; approve/reject/feature
- **Analytics** — platform stats, match rates, engagement metrics (charts)
- **Push Notifications** — compose and broadcast push messages to all users

---

## Company Dashboard

Companies log in with a separate signup flow and access `go('codash')`.

### Features
- Post new internship listings (role, skills, location, stipend, duration)
- Review AI-ranked candidate applications
- Shortlist, reject, or message candidates
- View analytics on listing performance

---

## Getting Started

### Running locally

No build step required. Serve the files with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Use the "Live Server" extension
```

Then open `http://localhost:8080` in your browser. The splash screen (`index.html`) will load and redirect to `nirmaan.html` after ~2.8 seconds.

### Demo credentials

The app ships with mock data. Use any of these to log in:

| Role | Email | Password |
|---|---|---|
| Student | `demo@student.com` | any |
| Company | `hr@company.com` | any |
| Admin | `admin@nirmaan.ai` | any |

> All data is in-memory and resets on page refresh.

### Deploying

Drop all files into any static hosting service:
- **GitHub Pages** — push to a repo and enable Pages
- **Netlify / Vercel** — drag-and-drop the folder
- **Firebase Hosting** — `firebase deploy`

Ensure `manifest.json` and `sw.js` are served from the root path for PWA features to work.

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+K` / `Cmd+K` | Open / close Global Search overlay |
| `↑` / `↓` | Navigate search results |
| `Enter` | Open focused/first search result |
| `Escape` | Close any open overlay (search, chat, accessibility panel) |
| `Ctrl+O` | Open standalone chatbot popup (from `nirmaan-chat-opener.html`) |

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full (PWA + Voice) |
| Edge 90+ | ✅ Full (PWA + Voice) |
| Firefox 95+ | ✅ (no voice input — SpeechRecognition not supported) |
| Safari 15+ (iOS/macOS) | ✅ PWA installable on iOS 16.4+; voice input limited |
| Samsung Internet | ✅ Full |

**Voice features** (speech recognition + synthesis) require Chrome or a Chromium-based browser.

---

## Changelog

### v3.0 (current)
- ✅ **Global Search** — Ctrl+K overlay with internship + page search, accessible from every page and mobile nav
- ✅ **Search button in mobile bottom nav** — persistent 🔍 tab available on all dashboard pages
- ✅ **Search icon in desktop nav** — always-visible 🔍 in top-right nav actions (not just dashboard)
- ✅ Accessibility widget with 9 settings, badge counter, and localStorage persistence
- ✅ Hero section particle canvas animation + typewriter effect
- ✅ Bilingual chatbot (Arya) with voice input/output
- ✅ Admin push notification composer
- ✅ Rewards / gamification system
- ✅ PWA install banner with deferred prompt
- ✅ Service Worker v3.1 with push notification support
- ✅ Onboarding spotlight tour (student + company)

### v2.x
- Skill Gap analysis with course recommendations
- Career Roadmap with weekly milestones
- Resume Builder with ATS tips
- Networking Hub with connection management
- Dark mode and bilingual (EN/HI) support

### v1.x
- Initial AI matching engine
- Basic internship listings
- Student sign-up and profile

---

*Built with ❤️ in India 🇮🇳 — Nirmaan Technologies Pvt. Ltd. © 2025*
