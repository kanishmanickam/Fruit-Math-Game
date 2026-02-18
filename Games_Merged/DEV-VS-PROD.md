# 🔧 Development vs Production Setup

## Understanding the Two Modes

### 🛠️ Development Mode (`npm run dev`)

**How it works:**
- Runs 3 separate servers simultaneously
- Uses `index-dev.html` which links to dev servers
- Each game runs on its own port with hot-reload

**URLs:**
- Homepage: `http://localhost:3000` (shows dev homepage)
- Fruit Garden: `http://localhost:5173` (Vite dev server)
- Smart Garage: `http://localhost:3001` (React dev server)

**What happens when you click a game:**
- Opens game in a new tab
- Direct connection to dev server
- Hot reload enabled
- Dev tools available

**Perfect for:**
- Active development
- Testing changes
- Debugging
- Making modifications

---

### 🚀 Production Mode (`npm run build`)

**How it works:**
- Builds all games into static files
- Creates unified `dist/` folder
- Uses `index.html` with relative paths
- All games work from single directory

**Structure:**
```
dist/
├── index.html          # Homepage with production paths
├── styles.css
├── fruit-garden/       # Built Fruit Garden
└── smart-garage/       # Built Smart Garage
```

**URLs (after deployment):**
- Homepage: `your-domain.com/`
- Fruit Garden: `your-domain.com/fruit-garden`
- Smart Garage: `your-domain.com/smart-garage`

**Perfect for:**
- Deployment to Vercel/Netlify
- Testing production build
- Sharing with others
- Final release

---

## Quick Reference

| Task | Command | Result |
|------|---------|--------|
| Start Development | `npm run dev` | 3 servers running |
| Build Production | `npm run build` | Creates `dist/` folder |
| Preview Production | `npm run preview` | Test production build |
| Deploy | `vercel` | Deploy to Vercel |

---

## Port Configuration

### Development Ports
- **3000** - Homepage (http-server)
- **5173** - Fruit Garden (Vite)
- **3001** - Smart Garage (CRA)

### If Port is Busy
Edit `Math_Game_FSlab2/.env`:
```
PORT=3002
BROWSER=none
```

Or kill the process using the port:
```powershell
# Find process
netstat -ano | findstr :3001

# Kill process (replace PID)
taskkill /PID <process_id> /F
```

---

## Files Explained

| File | Purpose |
|------|---------|
| `index.html` | Production homepage (relative paths) |
| `index-dev.html` | Development homepage (localhost URLs) |
| `build.js` | Builds production version |
| `.env` in Math_Game_FSlab2 | Sets port 3001 for dev |

---

## Troubleshooting

### "Port already in use"
- Close other apps using those ports
- Check if previous dev session is still running
- Change port in `.env` file

### "404 Not Found" in dev mode
- Make sure all 3 servers started successfully
- Check that Fruit Garden is on port 5173
- Check that Smart Garage is on port 3001
- Wait a few seconds for servers to start

### Games don't open
- Make sure you're clicking the buttons on `http://localhost:3000`
- Links open in new tabs
- Check browser console for errors

---

## Best Practices

### For Development
1. Always run `npm run dev` from the root
2. Wait for all servers to start (5-10 seconds)
3. Use the homepage to navigate between games
4. Keep terminal open to see logs

### For Production
1. Test with `npm run build` before deploying
2. Preview with `npm run preview`
3. Check all links work
4. Deploy `dist/` folder only

---

**Now you understand the difference! Use dev mode for coding, production for deployment! 🚀**
