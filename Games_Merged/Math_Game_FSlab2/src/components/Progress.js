import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CarDisplay from './CarDisplay';

function Progress({ stats, onGoHome, onPlayAgain }) {
    const { totalQuestions, correctAnswers, stars, history, carParts, completedCars, currentCarModel } = stats;
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    return (
        <div className="card">
            <h2>🏆 Your Smart Garage! 🚗</h2>

            <div className="progress-summary">
                <div className="stat-card">
                    <div className="stat-value">{totalQuestions}</div>
                    <div className="stat-label">Problems Solved</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{correctAnswers}</div>
                    <div className="stat-label">Correct Answers</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{accuracy}%</div>
                    <div className="stat-label">Accuracy</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{completedCars.length}</div>
                    <div className="stat-label">Cars Completed 🚗</div>
                </div>
            </div>

            {completedCars.length > 0 && (
                <div className="completed-cars-section">
                    <h3>🎉 Completed Cars Collection 🎉</h3>
                    <div className="completed-cars-grid">
                        {completedCars.map((car, index) => (
                            <div key={index} className="completed-car-item">
                                <CarDisplay carParts={car.parts} carModel={car.model} />
                                <div className="completed-car-info">
                                    <div className="car-number">Car #{index + 1}</div>
                                    <div className="completed-time">{car.completedAt}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="car-showcase">
                <h3>Current Car Progress 🚙</h3>
                <CarDisplay carParts={carParts} carModel={currentCarModel} />
                {carParts.length === 10 ? (
                    <div className="completion-message">
                        🎉 Congratulations! Your car is complete! 🎉
                        <div className="celebration">🚗💨 Keep playing to build more! 🏁</div>
                    </div>
                ) : (
                    <div className="progress-message">
                        Keep solving problems to add more parts!<br />
                        {10 - carParts.length} parts remaining!
                    </div>
                )}
            </div>

            {history.length > 0 && (
                <div className="chart-container">
                    <h3>📊 Performance Over Time</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={history}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis 
                                dataKey="question" 
                                label={{ value: 'Question Number', position: 'insideBottom', offset: -5 }}
                                stroke="#555"
                            />
                            <YAxis 
                                label={{ value: 'Accuracy %', angle: -90, position: 'insideLeft' }}
                                stroke="#555"
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: '#fff', 
                                    border: '2px solid #4A90E2',
                                    borderRadius: '8px'
                                }}
                            />
                            <Legend />
                            <Line 
                                type="monotone" 
                                dataKey="accuracy" 
                                stroke="#4A90E2" 
                                strokeWidth={3}
                                name="Accuracy %" 
                                dot={{ fill: '#4A90E2', r: 5 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}

            <div className="achievements">
                <h3>🏅 Achievements</h3>
                <div className="achievement-grid">
                    {stars >= 5 && (
                        <div className="achievement-badge">
                            <span className="badge-icon">🌟</span>
                            <span className="badge-text">Star Collector</span>
                        </div>
                    )}
                    {correctAnswers >= 10 && (
                        <div className="achievement-badge">
                            <span className="badge-icon">🔧</span>
                            <span className="badge-text">Master Mechanic</span>
                        </div>
                    )}
                    {accuracy >= 80 && totalQuestions >= 5 && (
                        <div className="achievement-badge">
                            <span className="badge-icon">🎯</span>
                            <span className="badge-text">Accuracy Expert</span>
                        </div>
                    )}
                    {carParts.length >= 5 && (
                        <div className="achievement-badge">
                            <span className="badge-icon">🚗</span>
                            <span className="badge-text">Car Builder</span>
                        </div>
                    )}
                    {carParts.length === 10 && (
                        <div className="achievement-badge">
                            <span className="badge-icon">🏆</span>
                            <span className="badge-text">Car Complete!</span>
                        </div>
                    )}
                    {totalQuestions === 0 && (
                        <div className="achievement-placeholder">
                            Start solving problems to earn achievements! 🌟
                        </div>
                    )}
                </div>
            </div>

            <div className="nav-buttons">
                <button className="btn btn-primary" onClick={onPlayAgain}>
                    🔨 Build More Cars
                </button>
                <button className="btn btn-secondary" onClick={onGoHome}>
                    🏠 Home
                </button>
            </div>
        </div>
    );
}

export default Progress;
