import React, { useState } from 'react';
import Home from './components/Home';
import Game from './components/Game';
import Progress from './components/Progress';
import './App.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [showCarAnimation, setShowCarAnimation] = useState(false);
    const [gameStats, setGameStats] = useState({
        totalQuestions: 0,
        correctAnswers: 0,
        stars: 0,
        carParts: [], // Array of car parts collected
        history: [],
        completedCars: [], // Array of completed cars
        currentCarModel: 'sedan', // sedan, truck, sports
        difficultyLevel: 'easy' // easy, medium, hard
    });

    const startGame = () => {
        setCurrentScreen('game');
    };

    const viewProgress = () => {
        setCurrentScreen('progress');
    };

    const goHome = () => {
        setCurrentScreen('home');
    };

    const updateStats = (isCorrect) => {
        setGameStats(prevStats => {
            const newStats = {
                ...prevStats,
                totalQuestions: prevStats.totalQuestions + 1,
                correctAnswers: isCorrect ? prevStats.correctAnswers + 1 : prevStats.correctAnswers
            };

            if (isCorrect) {
                newStats.stars = prevStats.stars + 1;
                
                // Add car parts in order: body, wheels, windows, doors, lights
                const carPartSequence = ['body', 'wheel1', 'wheel2', 'window1', 'window2', 'door1', 'door2', 'light1', 'light2', 'roof'];
                const nextPartIndex = prevStats.carParts.length;
                
                if (nextPartIndex < carPartSequence.length) {
                    newStats.carParts = [...prevStats.carParts, carPartSequence[nextPartIndex]];
                    
                    // Check if car is complete
                    if (newStats.carParts.length === 10) {
                        // Save completed car
                        const completedCar = {
                            model: prevStats.currentCarModel,
                            parts: [...newStats.carParts],
                            completedAt: new Date().toLocaleString()
                        };
                        newStats.completedCars = [...prevStats.completedCars, completedCar];
                        
                        // Show car moving animation
                        setShowCarAnimation(true);
                        setTimeout(() => setShowCarAnimation(false), 3000);
                        
                        // Update difficulty level based on completed cars
                        const totalCompleted = newStats.completedCars.length;
                        if (totalCompleted >= 3) {
                            newStats.difficultyLevel = 'hard';
                        } else if (totalCompleted >= 1) {
                            newStats.difficultyLevel = 'medium';
                        }
                        
                        // Start new car with different model
                        const carModels = ['sedan', 'truck', 'sports'];
                        const currentIndex = carModels.indexOf(prevStats.currentCarModel);
                        const nextModel = carModels[(currentIndex + 1) % carModels.length];
                        
                        newStats.currentCarModel = nextModel;
                        newStats.carParts = []; // Reset for new car
                    }
                }
            }

            const score = Math.round((newStats.correctAnswers / newStats.totalQuestions) * 100);
            newStats.history = [
                ...prevStats.history,
                { question: newStats.totalQuestions, accuracy: score }
            ].slice(-10);

            return newStats;
        });
    };

    return (
        <div className="app">
            {showCarAnimation && (
                <div className="car-completion-overlay">
                    <div className="animated-car-container">
                        <div className="completion-text-big">🎉 CAR COMPLETE! 🎉</div>
                        <div className="animated-car-moving">
                            <svg viewBox="0 0 400 250" className="moving-car-svg">
                                {gameStats.completedCars.length > 0 && (() => {
                                    const lastCar = gameStats.completedCars[gameStats.completedCars.length - 1];
                                    const model = lastCar.model;
                                    
                                    if (model === 'sedan') {
                                        return (
                                            <>
                                                <rect x="80" y="120" width="240" height="80" fill="#FF6B6B" rx="15" />
                                                <polygon points="120,120 160,80 240,80 280,120" fill="#FF8787" />
                                                <polygon points="130,120 160,90 240,90 270,120" fill="#FF5252" />
                                                <circle cx="130" cy="200" r="30" fill="#2C3E50" />
                                                <circle cx="130" cy="200" r="15" fill="#95A5A6" />
                                                <circle cx="270" cy="200" r="30" fill="#2C3E50" />
                                                <circle cx="270" cy="200" r="15" fill="#95A5A6" />
                                                <polygon points="140,110 165,90 185,90 185,110" fill="#87CEEB" opacity="0.7" />
                                                <polygon points="215,110 215,90 235,90 260,110" fill="#87CEEB" opacity="0.7" />
                                                <rect x="90" y="130" width="60" height="65" fill="#FF5252" rx="5" />
                                                <rect x="250" y="130" width="60" height="65" fill="#FF5252" rx="5" />
                                                <ellipse cx="75" cy="150" rx="8" ry="12" fill="#FFF59D" />
                                                <ellipse cx="325" cy="150" rx="8" ry="12" fill="#FFF59D" />
                                            </>
                                        );
                                    } else if (model === 'truck') {
                                        return (
                                            <>
                                                <rect x="200" y="110" width="130" height="90" fill="#4CAF50" rx="10" />
                                                <rect x="70" y="120" width="120" height="80" fill="#66BB6A" rx="10" />
                                                <polygon points="70,120 100,90 170,90 190,120" fill="#81C784" />
                                                <circle cx="120" cy="205" r="35" fill="#2C3E50" />
                                                <circle cx="120" cy="205" r="18" fill="#95A5A6" />
                                                <circle cx="290" cy="205" r="35" fill="#2C3E50" />
                                                <circle cx="290" cy="205" r="18" fill="#95A5A6" />
                                                <rect x="80" y="130" width="40" height="35" fill="#87CEEB" opacity="0.7" rx="5" />
                                                <circle cx="60" cy="160" r="10" fill="#FFF59D" />
                                            </>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <ellipse cx="200" cy="140" rx="130" ry="50" fill="#9C27B0" />
                                                <rect x="70" y="140" width="260" height="50" fill="#BA68C8" rx="25" />
                                                <ellipse cx="200" cy="115" rx="80" ry="35" fill="#7B1FA2" />
                                                <circle cx="120" cy="195" r="32" fill="#2C3E50" />
                                                <circle cx="120" cy="195" r="16" fill="#E91E63" />
                                                <circle cx="280" cy="195" r="32" fill="#2C3E50" />
                                                <circle cx="280" cy="195" r="16" fill="#E91E63" />
                                                <ellipse cx="165" cy="115" rx="25" ry="20" fill="#37474F" opacity="0.8" />
                                                <ellipse cx="235" cy="115" rx="25" ry="20" fill="#37474F" opacity="0.8" />
                                                <ellipse cx="60" cy="155" rx="12" ry="8" fill="#00E5FF" />
                                                <ellipse cx="340" cy="155" rx="12" ry="8" fill="#00E5FF" />
                                            </>
                                        );
                                    }
                                })()}
                            </svg>
                        </div>
                        <div className="garage-destination">
                            <div className="garage-icon">🏠</div>
                            <div className="garage-label">GARAGE</div>
                        </div>
                    </div>
                </div>
            )}
            
            {currentScreen === 'home' && (
                <Home onStartGame={startGame} onViewProgress={viewProgress} />
            )}

            {currentScreen === 'game' && (
                <Game
                    onGoHome={goHome}
                    onViewProgress={viewProgress}
                    updateStats={updateStats}
                    currentStats={gameStats}
                />
            )}

            {currentScreen === 'progress' && (
                <Progress
                    onGoHome={goHome}
                    onPlayAgain={startGame}
                    stats={gameStats}
                />
            )}
        </div>
    );
}

export default App;
