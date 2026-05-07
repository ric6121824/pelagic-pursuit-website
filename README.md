# Pelagic Pursuit Website

> A beautiful, interactive website for the Pelagic Pursuit game — built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### For Developers

1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd pelagic-pursuit-deep-dive-main
   ```

2. **Install dependencies** (first time only)
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```
   Then open: **http://localhost:8080/**

4. **Make changes**
   - Edit any `.tsx` file in `src/components/`
   - Website automatically updates (no restart needed!)

5. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your message here"
   git push origin main
   ```

---

## 📝 How to Update Content

### Update Team Roster
**File**: `src/components/TeamSection.tsx`

Find the `team` array and edit:
```jsx
const team = [
  { name: "Your Name", nick: "Nick", role: "Job Title", focus: "Main Tasks" },
  // more members...
];
```

### Update Text Anywhere
1. Find the section file in `src/components/`
2. Edit the text
3. Save → Website updates instantly

### Add Images
1. Put image file in `src/assets/`
2. Import it: `import img from "@/assets/my-image.png"`
3. Use it: `<img src={img} alt="..." />`

---

## 📁 File Structure

```
src/
├── App.tsx                 ← Main app setup
├── main.tsx                ← Entry point
├── pages/
│   ├── Index.tsx          ← Main page (shows all sections)
│   └── NotFound.tsx        ← 404 page
├── components/
│   ├── Navbar.tsx         ← Top menu
│   ├── HeroSection.tsx    ← Intro/hero
│   ├── AboutSection.tsx   ← Project goals
│   ├── TeamSection.tsx    ← Team roster 👈 recently updated!
│   ├── FeaturesSection.tsx
│   ├── KeybindingsSection.tsx
│   ├── TutorialSection.tsx
│   ├── RoadmapSection.tsx
│   ├── ResourcesSection.tsx
│   ├── SupervisorsSection.tsx
│   ├── Footer.tsx
│   └── ui/                ← Reusable buttons, cards, etc
├── assets/                ← Images, logos
├── hooks/                 ← Custom React logic
└── lib/                   ← Utilities
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React** | Interactive UI library |
| **TypeScript** | Safer JavaScript with type checking |
| **Vite** | Fast build tool |
| **Tailwind CSS** | Styling system |
| **Framer Motion** | Animations & transitions |
| **React Router** | Page navigation |
| **shadcn/ui** | Pre-built UI components |

---

## 📋 Common Tasks

### Add a New Section
1. Create `src/components/MySection.tsx`
2. Copy structure from an existing section
3. Add to `src/pages/Index.tsx`

### Change Colors/Styling
Edit `tailwind.config.ts` - all colors defined there

### Check for Errors
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```
Output goes to `dist/` folder

---

## 🐛 Troubleshooting

**Website doesn't update after editing?**
- Save the file
- Check browser console for errors (F12)
- Restart dev server if needed

**Port 8080 already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies broken?**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📖 More Info

For detailed codebase explanation, see: **[CODEBASE_GUIDE.md](./CODEBASE_GUIDE.md)**

---

## 👥 Team

See [TeamSection.tsx](src/components/TeamSection.tsx) for the full team roster.

---

## 📄 License

Pelagic Pursuit © 2024 University of Bremen
