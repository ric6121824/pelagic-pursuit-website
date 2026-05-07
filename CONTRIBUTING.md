# Contributing to Pelagic Pursuit Website

This guide is for everyone on the team (not just developers!).

## 🎯 What You Can Change

### Text Content
<<<<<<< HEAD
- Team names and roles
=======
- Team names and roles 
>>>>>>> 8fe296971c6ee9b8e0986c9f6160977c88886526
- Project descriptions
- Section titles and descriptions
- Links and buttons

### Images & Assets
- Logos, backgrounds, photos
- Icons and graphics

### Layout (Advanced)
- Reorder sections
- Add/remove sections
- Change colors and styling

## ✏️ Making Simple Changes

### Step 1: Clone the Repository
```bash
git clone <repo-url>
cd pelagic-pursuit-deep-dive-main
npm install
npm run dev
```

Visit: http://localhost:8080/

### Step 2: Find What to Edit

Looking for... | File Location
---|---
Team names/roles | `src/components/TeamSection.tsx`
Navbar links | `src/components/Navbar.tsx`
Hero message | `src/components/HeroSection.tsx`
Project goals | `src/components/AboutSection.tsx`
Features | `src/components/FeaturesSection.tsx`
Roadmap | `src/components/RoadmapSection.tsx`
Downloads | `src/components/Navbar.tsx` or `src/components/HeroSection.tsx`

### Step 3: Edit the File

Open the file in VS Code and edit the text. **That's it!** The website updates automatically.

Example - changing team member info:
```jsx
// In src/components/TeamSection.tsx

const team = [
  { 
    name: "Ping-Chung Tsai",     // ← Edit full name here
    nick: "Ping",                 // ← Edit nickname here
    role: "Project Lead",         // ← Edit job title here
    focus: "Project Management"   // ← Edit main tasks here
  },
  // ... other team members
];
```

### Step 4: Save & Test

1. Save the file (Ctrl+S)
2. Check the website - it updates automatically!
3. If something breaks, check the terminal for error messages

### Step 5: Upload to GitHub

```bash
# Stage changes
git add .

# Create a commit (save point)
git commit -m "Updated team roster with new roles"

# Push to GitHub
git push origin main
```

Format: `git commit -m "What changed and why"`

## 🔄 Workflow for Changes

1. **Pull latest changes** (in case others updated)
   ```bash
   git pull origin main
   ```

2. **Make your edits**
   - Edit the files
   - Test in browser (http://localhost:8080/)

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

## ⚠️ Common Issues

### "I can't see my changes!"
- **Solution**: Save the file (Ctrl+S) and refresh browser (F5)

### "The website shows an error"
- **Solution**: Check the terminal for error messages, fix the typo

### "My changes didn't push"
- **Solution**: Make sure you ran `git push origin main`

### "Git says there are conflicts"
- **Solution**: This means someone else edited the same file. Ask for help!

## 📚 Need More Help?

- **For specific instructions**: See [README.md](./README.md) or [CODEBASE_GUIDE.md](./CODEBASE_GUIDE.md)
- **For detailed setup**: Check the README

## 🚀 Key Files to Know

```
README.md                    ← Setup & overview (read this first!)
CODEBASE_GUIDE.md           ← Detailed code explanation
CONTRIBUTING.md             ← This file (how to make changes)
src/components/             ← Where all content lives
```

---

**That's it!** You're ready to contribute. 🎉
