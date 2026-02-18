# 🎮 Fun Learning Games Hub

A centralized hub for two educational games: **Fruit Garden** 🍎 and **Smart Garage** 🚗

## 🌟 Games Included

### 🍎 Fruit Garden
- Interactive fruit gallery with facts
- Matching game
- Fruit knowledge quiz
- Built with: Vite + React

### 🚗 Smart Garage
- Math learning through car building
- Progressive difficulty levels
- Progress tracking
- Built with: Create React App

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```powershell
# Install all dependencies for the hub and both games
npm run install:all
```

### Running Locally

#### Option 1: Run All Games Together (Recommended for Development)
```powershell
npm run dev
```
This starts:
- Homepage at `http://localhost:3000`
- Fruit Garden at `http://localhost:5173`
- Smart Garage at `http://localhost:3001`

#### Option 2: Run Individual Games
```powershell
# Fruit Garden only
npm run dev:fruit

# Smart Garage only
npm run dev:math

# Homepage only
npm run dev:home
```

---

## 📦 Building for Production

### Build All Games
```powershell
npm run build
```

This will:
1. Build the Fruit Garden game (Vite)
2. Build the Smart Garage game (CRA)
3. Copy all files to `dist/` folder with correct paths:
   - `dist/index.html` - Homepage
   - `dist/fruit-garden/` - Fruit Garden game
   - `dist/smart-garage/` - Smart Garage game

### Preview Production Build
```powershell
npm run preview
```
Opens the production build at `http://localhost:8080`

---

## 🌐 Deploying to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```powershell
npm install -g vercel
```

2. Login to Vercel:
```powershell
vercel login
```

3. Deploy:
```powershell
vercel
```

4. For production deployment:
```powershell
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect the configuration from `vercel.json`
6. Click "Deploy"

### Vercel Configuration

The `vercel.json` file is already configured with:
- Build command: `npm run vercel-build`
- Output directory: `dist`
- Proper routing for both games
- SPA rewrites for client-side routing

---

## 📁 Project Structure

```
Games_Merged/
├── index.html                 # Central homepage
├── styles.css                 # Homepage styles
├── package.json               # Root package.json with scripts
├── build.js                   # Unified build script
├── vercel.json               # Vercel deployment config
├── CB.SC.U4CSE23424/         # Fruit Garden (Vite + React)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── Math_Game_FSlab2/         # Smart Garage (CRA)
│   ├── src/
│   └── package.json
└── dist/                      # Production build (generated)
    ├── index.html
    ├── styles.css
    ├── fruit-garden/
    └── smart-garage/
```

---

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run install:all` | Install dependencies for all projects |
| `npm run dev` | Run all games in development mode |
| `npm run dev:fruit` | Run only Fruit Garden |
| `npm run dev:math` | Run only Smart Garage |
| `npm run dev:home` | Run only homepage |
| `npm run build` | Build all games for production |
| `npm run build:fruit` | Build only Fruit Garden |
| `npm run build:math` | Build only Smart Garage |
| `npm run preview` | Preview production build locally |
| `npm run vercel-build` | Build for Vercel (auto-called) |

---

## 🔧 Troubleshooting

### Port Already in Use
If you get a port conflict, you can:
1. Close other applications using those ports
2. Modify the port numbers in `package.json` scripts

### Build Fails
1. Make sure all dependencies are installed: `npm run install:all`
2. Clear node_modules and reinstall:
```powershell
Remove-Item -Recurse -Force node_modules, CB.SC.U4CSE23424/node_modules, Math_Game_FSlab2/node_modules
npm run install:all
```

### Vercel Deployment Issues
1. Ensure `vercel.json` is in the root directory
2. Check that `dist/` folder is generated correctly with `npm run build`
3. Verify all paths in `index.html` are relative

---

## 🎨 Customization

### Updating Homepage
- Edit `index.html` for content
- Edit `styles.css` for styling
- After building, updated files will be in `dist/`

### Adding More Games
1. Add game folder to root directory
2. Update `package.json` scripts
3. Update `build.js` to include the new game
4. Add a card to `index.html`
5. Update `vercel.json` routes

---

## 📝 Notes

- The homepage uses clean URLs: `/fruit-garden` and `/smart-garage`
- Both games support client-side routing
- Production build is optimized and minified
- All assets are properly bundled

---

## 🤝 Contributing

Feel free to enhance the games or add new features!

---

## 📄 License

MIT License - Feel free to use and modify for educational purposes.

---

**Happy Learning! 🎉**
