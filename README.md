# Houssem Eddine Magra — Portfolio (`Houssemeddine-mag.github.io`)

Personal portfolio & engineering catalog of **Houssem Eddine Magra** — Master 2 Data Science & Intelligent Systems student at Université Constantine 2, Software Engineer, Founder of **El Moultaqa (الملتقى)**, and Web Developer & Technical Problem Solver at **Ooredoo Algérie**.

## Design language — "Constantine Ledger"

A hand-set, editorial identity built around his path: Constantine (the city of bridges) and El Moultaqa ("the gathering") — bridging telecom engineering and applied AI research.

- **Logo**: a bridge "H" mark — two piers and a deck spelling **H** (Houssem · Magra), a suspension **arch** (Constantine's bridges / El Moultaqa), and a **signal dot** (telecom). Used inline and as the favicon.
- **Palette**: warm ink-on-paper neutrals (cream `#F7F4ED` "Ledger" light theme / warm-black `#131211` "Carbon" dark theme), **signal teal** (`#0D7A6E`) as primary accent and **copper** (`#A0522A`) as the research accent. No gradients, no glow.
- **Type**: one serif voice across themes — Newsreader (display, body prose and UI, with optical sizing) + IBM Plex Mono (labels, code & data). Font tokens live on the base `html` rule, so light "Ledger" and dark "Carbon" always render identical typography.

## Recruiter ↔ Researcher lens

A site-wide segmented switch in the header (persisted in `localStorage`) retunes the whole page:

- The accent system crossfades teal (recruiter) ↔ copper (researcher).
- Hero copy, headings and the "at a glance" card swap lenses (`data-when` blocks).
- The catalog reorders: flagship production builds first for recruiters; research-study badges and supervisor metadata surface for researchers (with a dedicated "Research studies" filter).

## Features

- **Consultative, no-gadget interactions**: filter chips + search, cards/spec-table view switch, project deep-dive modal, venture tabs, certificate lightbox, toasts — no intro curtains, typewriters, cursors, marquees or confetti.
- **Complete 24-project catalog** covering AI/ML research (TRIA, Clinical Risk Modeling, NTIC Telecom BI), vision (ChargeOps Sys, Handzy, MusicalMe, DAC), AI gesture & EdTech (TechGraden), mobile & desktop (Sam Code, ItFits, Penguin Deals, NaviJam, QR generator), full-stack & distributed systems (Rif Connect 2.0, Al-Amira, Online Store API, microservices, Kafka, gRPC…).
- **Trilingual interface (EN / FR / AR with RTL support)** and `prefers-reduced-motion` support.
- **SEO basics**: canonical URL, Open Graph tags, and JSON-LD `Person` structured data.
- **CV**: the primary CV ships as **`Houssem_Eddine_Magra_Academic_CV.pdf`** — the header button and hero CTA open it directly in a new tab. Legacy `cv.html`, `Houssem_Eddine_Magra_CV.pdf` and `houssemos.html` remain in the repo for reference.
- **Certificate gallery (10 verified scans)**: every credential is displayed as its real document, stored under `assets/` (`assets/Stage`, `assets/Informatique`, `assets/English`, `assets/other`). Image scans open in a keyboard-navigable lightbox (←/→/Esc); PDFs open in a new tab. The set covers: the Licence degree (Université Constantine 2 · Génie logiciel, 2025), the RiF′25 conference-app certificate, the Ooredoo internship attestation (2026), Kaggle Python (2024), Saylor CS101 & CS205, the Mozilla Campus Club Databases appreciation (2023/24), ULC English B2 (2025), Canva Teacher Essentials, and a Forsa jury certificate.

## Deploying to GitHub Pages

```bash
git clone https://github.com/Houssemeddine-mag/Houssemeddine-mag.github.io.git
cd Houssemeddine-mag.github.io
# Copy index.html, cv.html, houssemos.html, Houssem_Eddine_Magra_Academic_CV.pdf, README.md, .nojekyll and the assets/ folder here
git add .
git commit -m "feat: editorial redesign with bridge mark, ledger palette, and recruiter/researcher lens"
git push origin main
```

To preview locally, open `index.html` in a browser or run any static server (e.g. `npx serve`).
