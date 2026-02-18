# 🚗 Smart Garage - Car Builder Math Learning Game

An autism-friendly math learning game built with ReactJS and Node.js. Children solve math problems to build a 3D car part by part!

## ✨ Features

- **5 Math Operation Types:** Counting, Addition, Subtraction, Multiplication, Pattern Recognition
- **3D Car Building:** Visual SVG car with 10 parts that appear as you solve problems
- **Progress Tracking:** Statistics, accuracy charts with Recharts, achievement badges
- **Autism-Friendly Design:** Calm colors, large buttons, visual representations, no time pressure
- **Responsive Design:** Works on desktop, tablet, and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser to:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

## 🎮 How to Play

1. Click **"Start Building"** on the home screen
2. Solve math problems by clicking the correct answer
3. Each correct answer adds a new part to your car!
4. Complete all 10 parts to finish your car
5. View your progress and statistics in the **"View Garage"** screen

## 🧩 Math Operations

- **Counting:** Count visual objects (1-8)
- **Addition:** Add two groups of objects
- **Subtraction:** Remove objects from a group
- **Multiplication:** Calculate groups of objects (up to 5×5)
- **Pattern Recognition:** Complete sequences with shapes and colors

## 🛠️ Technology Stack

- **React 18.2.0** - Frontend framework
- **React-Scripts 5.0.1** - Build tool (includes Node.js)
- **Recharts 2.5.0** - Data visualization
- **CSS3** - Styling with animations

## 📁 Project Structure

```
Math_Game_FSlab2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js          # Landing page
│   │   ├── Game.js          # Game logic with 5 math types
│   │   ├── Progress.js      # Statistics and garage display
│   │   └── CarDisplay.js    # 3D SVG car visualization
│   ├── App.js               # Main component
│   ├── App.css              # Styling
│   └── index.js             # Entry point
├── package.json
└── README.md
```

## 🎨 Autism-Friendly Design

- **Pastel Colors:** Soft blues, grays, gentle yellows
- **Large Buttons:** Easy to click with high contrast
- **Visual Math:** All problems shown with emoji objects
- **No Timers:** Self-paced learning
- **Positive Feedback:** Encouraging messages for all answers
- **Predictable Layout:** Consistent navigation

## 🏆 Achievement System

- ⭐ **Star Collector** - Earn 5 stars
- 🔧 **Master Mechanic** - Answer 10 questions correctly
- 🎯 **Accuracy Expert** - Achieve 80%+ accuracy
- 🚗 **Car Builder** - Collect 5 car parts
- 🏆 **Car Complete!** - Finish all 10 parts

## 📊 Progress Tracking

- Total problems solved
- Correct answers count
- Accuracy percentage
- Interactive line chart showing performance over time
- Achievement badges

## 📸 Screenshots

### Home Screen
Welcome screen with instructions and car preview

### Game Screen
Interactive math problems with visual representations

### Progress Screen
Statistics dashboard with completed car and achievements

### Car Building
Watch your 3D SVG car grow with each correct answer!

## 🔧 Troubleshooting

**Port 3000 already in use:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Installation errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Browser doesn't open automatically:**
Manually navigate to http://localhost:3000

## 📚 Learning Outcomes

This project demonstrates:
- React functional components with Hooks
- State management with useState
- Props and component communication
- Node.js development server
- Data visualization with Recharts
- Responsive CSS design
- SVG graphics manipulation
- Accessibility best practices

## 👨‍💻 Developer Info

**Course:** Full Stack Frameworks Laboratory  
**Course Code:** CSE23424  
**Project:** Math Learning Game for Autism Children  

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Designed with autism-friendly principles
- Visual math representations for concrete learning
- Inspired by research in special education technology

---

**Enjoy building cars and learning math! 🚗✨**
