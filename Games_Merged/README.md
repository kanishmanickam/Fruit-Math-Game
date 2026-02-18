# 🎮 Fun Learning Games Hub

> A centralized educational gaming platform featuring **Fruit Garden** 🍎 and **Smart Garage** 🚗

[![Vercel Compatible](https://img.shields.io/badge/Vercel-Compatible-black?logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18%2B-blue?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Features

- **Unified Homepage** - Beautiful landing page with smooth animations
- **Two Educational Games** - Fruit learning and math practice
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Easy Deployment** - Vercel-ready with one command
- **Development Mode** - Run all games simultaneously

---

## 🎯 Games Overview

| Game | Description | Technology |
|------|-------------|-----------|
| 🍎 **Fruit Garden** | Interactive fruit encyclopedia with matching games and quizzes | Vite + React |
| 🚗 **Smart Garage** | Math learning through car building challenges | Create React App |

---

## 🚀 Quick Start

### Windows
```powershell
# Run setup script
.\setup.bat

# Start development server
npm run dev
```

### Mac/Linux
```bash
# Make script executable
chmod +x setup.sh

# Run setup script
./setup.sh

# Start development server
npm run dev
```

### Manual Installation
```bash
npm run install:all
npm run dev
```

---

## 📖 Usage Guide

### Development

**Start all games together:**
```bash
npm run dev
```
This starts:
- Homepage: http://localhost:3000 (links to dev servers)
- Fruit Garden: http://localhost:5173  
- Smart Garage: http://localhost:3001

**Note:** In development mode, the homepage (`index-dev.html`) links directly to the dev servers running on their own ports. This allows hot-reloading and development features.

**Start individual games:**
```bash
npm run dev:fruit    # Fruit Garden only
npm run dev:math     # Smart Garage only
npm run dev:home     # Homepage only
```

### Production Build

```bash
# Build all games
npm run build

# Preview production build
npm run preview
```

Output structure:
```
dist/
├── index.html              # Homepage
├── styles.css             # Homepage styles
├── fruit-garden/          # Fruit Garden build
│   ├── index.html
│   └── assets/
└── smart-garage/          # Smart Garage build
    ├── index.html
    └── static/
```

---

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy" (no configuration needed!)

### Vercel Configuration

The project includes `vercel.json` with:
- ✅ Automatic build detection
- ✅ Proper routing for both games
- ✅ SPA support for client-side routing
- ✅ Optimized asset serving

---

## 📁 Project Structure

```
Games_Merged/
│
├── 🏠 Homepage Files
│   ├── index.html              # Landing page
│   └── styles.css              # Styles
│
├── 🍎 Fruit Garden (CB.SC.U4CSE23424/)
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── data/              # Fruit data
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── 🚗 Smart Garage (Math_Game_FSlab2/)
│   ├── src/
│   │   ├── components/         # Game components
│   │   └── App.js
│   ├── public/
│   └── package.json
│
├── 🔧 Configuration
│   ├── package.json            # Root scripts
│   ├── build.js               # Build automation
│   ├── vercel.json            # Vercel config
│   └── .gitignore
│
├── 📚 Documentation
│   ├── README.md              # This file
│   └── DEPLOYMENT.md          # Detailed deployment guide
│
└── 🛠️ Scripts
    ├── setup.bat              # Windows setup
    └── setup.sh               # Mac/Linux setup
```

---

## 🎨 Customization

### Homepage Theme
Edit `styles.css` to customize:
- Color schemes
- Animations
- Card designs
- Responsive breakpoints

### Adding Games
1. Add game folder to root
2. Update `package.json` scripts
3. Modify `build.js` to include new game
4. Add game card to `index.html`
5. Update `vercel.json` routes

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run install:all` | Install all dependencies |
| `npm run dev` | Start all in development mode |
| `npm run dev:fruit` | Start Fruit Garden only |
| `npm run dev:math` | Start Smart Garage only |
| `npm run dev:home` | Start homepage only |
| `npm run build` | Build for production |
| `npm run build:fruit` | Build Fruit Garden only |
| `npm run build:math` | Build Smart Garage only |
| `npm run preview` | Preview production build |
| `npm run vercel-build` | Vercel build (auto-called) |

---

## 🔍 Troubleshooting

### Port Conflicts
If ports are already in use, modify `package.json`:
```json
"dev:fruit": "cd CB.SC.U4CSE23424 && npm run dev -- --port 5174"
```

### Build Errors
```bash
# Clean install
Remove-Item -Recurse -Force node_modules, */node_modules
npm run install:all
```

### Vercel Deployment Fails
1. Verify `vercel.json` exists in root
2. Test local build: `npm run build`
3. Check build output in `dist/`

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📝 Technical Details

### Technologies Used
- **Frontend**: React 18+, React Router
- **Build Tools**: Vite, Create React App
- **Styling**: CSS3, Animations
- **Deployment**: Vercel, Static Hosting
- **Package Management**: npm

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

Built with ❤️ for educational purposes

---

## 📞 Support

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

**🎉 Happy Learning!**
