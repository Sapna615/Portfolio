# GitHub Pages Deployment Guide

## Quick Setup Steps:

### 1. Build your portfolio
```bash
npm run build
```

### 2. Initialize git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 3. Create GitHub repository
- Go to github.com and create a new repository named "Portfolio"
- Don't initialize with README (since you already have files)

### 4. Add remote and push
```bash
git remote add origin https://github.com/yourusername/Portfolio.git
git branch -M main
git push -u origin main
```

### 5. Enable GitHub Pages
- Go to your repository on GitHub
- Click Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: /root
- Click Save

### 6. Deploy (one-time setup for gh-pages branch)
```bash
npm run deploy
```

### 7. Your portfolio will be live at:
`https://yourusername.github.io/Portfolio`

## For future updates:
```bash
npm run deploy
```

## Notes:
- Make sure your Formspree form ID is set up in Contact.jsx
- All images should be in the public folder
- The base path is already configured for GitHub Pages
