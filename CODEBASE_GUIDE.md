# Pelagic Pursuit Website - Codebase Guide

This guide explains how the website is organized and how to make changes.

---

## 📁 Folder Structure

```
src/
├── App.tsx              // Main app file - sets up routing & providers
├── main.tsx             // Entry point - loads the app into the browser
├── components/          // All website sections
│   ├── Navbar.tsx       // Top navigation bar with links & download buttons
│   ├── HeroSection.tsx  // Big intro section with logo & main message
│   ├── AboutSection.tsx // Project goals & mission info
│   ├── TeamSection.tsx  // Team roster (just updated!)
│   ├── FeaturesSection.tsx
│   ├── KeybindingsSection.tsx
│   ├── TutorialSection.tsx
│   ├── RoadmapSection.tsx
│   ├── ResourcesSection.tsx
│   ├── SupervisorsSection.tsx
│   ├── Footer.tsx
│   └── ui/              // Reusable UI components (buttons, cards, etc)
├── pages/
│   ├── Index.tsx        // Main page that combines all sections
│   └── NotFound.tsx     // 404 page
├── assets/              // Images, logos, etc
├── hooks/               // Custom React logic
└── lib/                 // Utilities & helper functions
```

---

## 🎨 How It Works

### The Main Page (pages/Index.tsx)
- Imports all sections and stacks them vertically
- Each section is a separate React component
- No logic here—just displaying components in order

### Each Section Component
All sections follow the same pattern:

```jsx
const SectionName = () => {
  return (
    <section id="section-id" className="py-28">
      <h2>Title</h2>
      {/* Content here */}
    </section>
  );
};
```

**Key elements:**
- `id="..."` - So navbar links can jump to this section
- `className="py-28"` - Padding for spacing
- `motion.div` - Smooth animations when scrolling into view

---

## 🎬 Making Changes

### To Update Team Roster
**File**: `src/components/TeamSection.tsx`

1. Find the `team` array at the top:
```jsx
const team = [
  { name: "...", nick: "...", role: "...", focus: "..." },
  // ... more team members
];
```

2. Edit any field:
   - `name`: Full name
   - `nick`: Nickname/short name
   - `role`: Job title
   - `focus`: Main responsibilities

3. Save the file → Website updates automatically ✨

### To Update Text Content
Find the section file and edit the text. For example:
- **Navbar links**: `src/components/Navbar.tsx`
- **Hero message**: `src/components/HeroSection.tsx`
- **About goals**: `src/components/AboutSection.tsx`

### To Add Images
1. Place image file in `src/assets/`
2. Import it: `import myImage from "@/assets/my-image.png";`
3. Use it: `<img src={myImage} alt="..." />`

---

## 🛠️ Running the Website Locally

```bash
# Install dependencies (one time)
npm install

# Start development server
npm run dev
```

Then open: **http://localhost:8080/**

Changes save automatically! No need to restart.

---

## 📦 Tech Stack Explained

- **React** - JavaScript library for building interactive UIs
- **TypeScript** - Safer version of JavaScript with type checking
- **Vite** - Fast build tool (makes the site load quickly)
- **Tailwind CSS** - Fast way to style with utility classes
- **Framer Motion** - Animation library (smooth scrolling effects)
- **shadcn/ui** - Pre-built UI components

**TL;DR**: All these tools work together to make the website fast, organized, and easy to update.

---

## ❓ Common Questions

**Q: How do I add a new section?**
A: Create a new `.tsx` file in `src/components/`, add it to `src/pages/Index.tsx`, done!

**Q: Where are the download links?**
A: `src/components/Navbar.tsx` - they point to itch.io

**Q: How do I change colors?**
A: Edit `tailwind.config.ts` - it defines the color scheme

**Q: How do I deploy to the internet?**
A: Ask Roopesh - it's in GitHub Actions setup

---

## 🚀 Next Steps

1. Clone the repo: `git clone <repo-url>`
2. Run `npm install`
3. Run `npm run dev`
4. Make changes to any `.tsx` files
5. Push changes to GitHub

Need help? Ask Roopesh! 🐧
