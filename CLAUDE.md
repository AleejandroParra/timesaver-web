# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS marketing website for **Time Saver** — a B2B services company offering automation, AI agents, web development, and chatbot solutions. Spanish-language, Argentina-focused audience. Hosted on Hostinger.

Remote repo: `https://github.com/AleejandroParra/timesaver-web.git` (branch: `main`)

## Development

No build system. Serve locally with any HTTP server or open `index.html` directly in a browser. Deploy by pushing files to Hostinger.

## Architecture

Single `index.html` with all content. Two JS files and one CSS file:

- `js/i18n.js` — Translation strings (EN/ES/PT) keyed by `data-i18n` attributes on HTML elements
- `js/js.js` — All runtime behavior: scroll detection, IntersectionObserver reveals, counter animations, chatbot demo sequencing, language switcher, mobile hamburger menu
- `css/styles.css` — Custom dark theme using CSS variables; no external CSS frameworks

**External dependencies (CDN only):**
- Google Fonts: Sora (headings), DM Sans (body)
- Icons are inline SVG (Lucide paths copied in directly, no runtime dependency)

**Sections (by `id`):** `#hero`, `#web-dev`, `#benefits`, `#services`, `#portfolio`, `#chatbot-demo`, `#process`, `#faq`, `#team` — nav links smooth-scroll to these.

## Key Conventions

- File names: kebab-case (e.g. `my-component.js`)
- CSS design tokens: `--bg`, `--card`, `--accent` (`#f97316` orange), `--accent2` (`#facc15` yellow), `--text`
- Translations: add new strings to all three locales (`es`, `en`, `pt`) in `i18n.js` and reference via `data-i18n="key"` in HTML
- WhatsApp CTA links: `https://wa.me/351938852194`
- Scroll reveal: add class `reveal` or `reveal-up` to elements; `js.js` handles the IntersectionObserver
