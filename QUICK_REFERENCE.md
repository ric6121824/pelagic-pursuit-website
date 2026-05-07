# Quick Reference — How to Make Changes

## 1️⃣ Start
```bash
cd pelagic-pursuit-deep-dive-main
npm run dev
# Open: http://localhost:8080/
```

## 2️⃣ Find What to Edit

| Need to Change | File | What to Look For |
|---|---|---|
| **Team names/roles** | `src/components/TeamSection.tsx` | `const team = [...]` array |
| **Navbar menu** | `src/components/Navbar.tsx` | `const navLinks = [...]` array |
| **Hero message** | `src/components/HeroSection.tsx` | Search for descriptive text |
| **Project goals** | `src/components/AboutSection.tsx` | `const goals = [...]` array |
| **Features** | `src/components/FeaturesSection.tsx` | Feature cards |
| **Roadmap** | `src/components/RoadmapSection.tsx` | Timeline items |
| **Downloads** | `src/components/Navbar.tsx` | Download buttons |

## 3️⃣ Edit Examples

### Change Team Member Info
**File**: `src/components/TeamSection.tsx`

```jsx
const team = [
  {
    name: "Ping-Chung Tsai",              // Full name
    nick: "Ping",                        // Short name
    role: "Project Lead & Tech Designer", // Job title (UPDATED!)
    focus: "Project Management, Art..."  // Main tasks (UPDATED!)
  },
  // ... more members
];
```

### Change Hero Text
**File**: `src/components/HeroSection.tsx`

```jsx
<motion.p className="...">  
  Your new text here
</motion.p>
```

### Change Links
**File**: `src/components/Navbar.tsx`

```jsx
const navLinks = [
  { label: "About", href: "#about" },      // Edit label or href
  { label: "Features", href: "#features" }, // Like this
];
```

## 4️⃣ Test
- Save file (Ctrl+S)
- Browser updates automatically
- If broken, check terminal for errors

## 5️⃣ Upload Changes
```bash
git add .
git commit -m "What you changed"
git push origin main
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Can't see changes | Save file & refresh browser (F5) |
| Syntax error | Check for typos, unclosed quotes |
| Port 8080 in use | `npm run dev -- --port 3000` |
| Need help | Ask Roopesh! |

---

## More Documentation
- **Setup guide**: [README.md](README.md)
- **How it works**: [CODEBASE_GUIDE.md](CODEBASE_GUIDE.md)  
- **Contributing**: [CONTRIBUTING.md](CONTRIBUTING.md)
