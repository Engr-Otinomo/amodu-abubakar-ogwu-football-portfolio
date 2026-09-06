# Amodu Abubakar Ogwu — Football Portfolio

Official responsive football portfolio website for **Amodu Abubakar Ogwu**, a versatile two-footed Nigerian midfielder (Central Midfielder • Attacking Midfielder • Winger) currently playing for **Delight FA** and available for trials.

---

## 🌟 Features

- **Athletic Football Identity**: Built with high-contrast sport aesthetics (Deep Navy `#071A2D`, Dark Blue `#0D2F4F`, Emerald Green `#22C55E`, Bright Green `#4ADE80`, Gold `#F5B942`).
- **Scout & Club Ready**: Clear differentiation between Amodu's direct Nigerian contact (`+234...`) and Manager / Coach **Partrick Clinton Erutere's** international representative contact (`+44...`).
- **Verified Match Performance**: Animated statistics counter displaying **25 Goals**, **36 Assists**, **61 Goal Contributions**, and **2 Awards Won** (active on viewport entry).
- **Interactive Action Gallery**: High-resolution match, portrait, and training photography with full-screen lightbox, arrow navigation, and keyboard shortcuts.
- **Match Video Highlights**: 16:9 embedded match reels with external YouTube access.
- **Official Football CV**: One-click download of the complete 3-page verified player CV (`Amodu_Abubakar_Ogwu_Football_CV.pdf`).
- **Mobile First & Fully Responsive**: Tested across 320px, 375px, 768px, 1024px, and 1440px viewport widths with smooth scrolling, accessible focus states, and zero horizontal overflow.

---

## 🛠️ Technology Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **gh-pages** (for automated GitHub Pages hosting)

---

## 🚀 Getting Started

### 1. Installation

Install all required npm dependencies:

```bash
npm install
```

*(On Windows PowerShell where script execution is disabled, use `npm.cmd install`)*

### 2. Run Local Development Server

```bash
npm run dev
```

*(or `npm.cmd run dev`)*

Open the localhost URL shown in the terminal (typically `http://localhost:5173/`).

### 3. Production Build

```bash
npm run build
```

*(or `npm.cmd run build`)*

The production assets will be built to the `dist` folder.

---

## 🌐 Custom Domain & GitHub Pages Deployment

The official custom domain is **`https://abubakaramodu.online/`**.

To build and deploy the latest version directly to the `gh-pages` branch:

```bash
npm run deploy
```

*(or `npm.cmd run deploy`)*

This runs `npm run build` and automatically pushes the generated `dist` folder to the `gh-pages` branch with the `CNAME` file pointing to `abubakaramodu.online`.

### Namecheap DNS Setup for `abubakaramodu.online`

In your Namecheap DNS management console:
- Add an `ALIAS` or `ANAME` record for `@` pointing to `engr-otinomo.github.io.` (or A records pointing to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
- Add a `CNAME` record for `www` pointing to `engr-otinomo.github.io.`.

---

## 📄 License & Credits

- © 2026 Amodu Abubakar Ogwu. All rights reserved.
- Website created by **OtisCloud**.
