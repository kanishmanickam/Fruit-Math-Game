import React from 'react';

function Home({ onStartGame, onViewProgress }) {
    return (
        <div className="card">
            <h1>🚗 Smart Garage 🔧</h1>
            <h2>Car Builder Math Game</h2>

            <p style={{ fontSize: '24px', margin: '20px 0', fontWeight: '600', color: '#555' }}>
                Build your dream car by solving math problems! ✨
            </p>

            <div className="instructions">
                <h3>🎮 How to Play:</h3>
                <ul>
                    <li>🔢 Solve counting and math problems</li>
                    <li>✅ Each correct answer adds a car part</li>
                    <li>🚗 Build your car piece by piece</li>
                    <li>🏆 Complete your amazing car!</li>
                </ul>
            </div>

            <div style={{ margin: '40px 0' }}>
                <div className="car-preview">
                    <div className="preview-text">Build This Car!</div>
                    <div className="simple-car-icon">
                        <div style={{ fontSize: '80px', textAlign: 'center' }}>🚗</div>
                    </div>
                </div>
            </div>

            <div className="nav-buttons">
                <button className="btn btn-primary" onClick={onStartGame}>
                    🚀 Start Building
                </button>
                <button className="btn btn-secondary" onClick={onViewProgress}>
                    🏆 View Garage
                </button>
            </div>

            <p style={{ marginTop: '30px', fontSize: '20px', fontWeight: '500', color: '#666' }}>
                Take your time and have fun! 😊
            </p>
        </div>
    );
}

export default Home;
