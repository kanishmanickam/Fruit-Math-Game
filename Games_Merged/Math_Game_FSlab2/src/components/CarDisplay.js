import React from 'react';

function CarDisplay({ carParts, carModel = 'sedan' }) {
    const totalParts = 10;
    const completionPercentage = (carParts.length / totalParts) * 100;

    const renderSedan = () => (
        <svg viewBox="0 0 400 250" className="car-svg">
            {/* Car Body Base with gradient */}
            {carParts.includes('body') && (
                <g className="car-part-appear">
                    <defs>
                        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#FF6B6B', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#D32F2F', stopOpacity: 1}} />
                        </linearGradient>
                        <filter id="carShadow">
                            <feDropShadow dx="0" dy="8" stdDeviation="4" floodOpacity="0.3"/>
                        </filter>
                    </defs>
                    <rect x="80" y="120" width="240" height="80" fill="url(#bodyGradient)" rx="15" filter="url(#carShadow)" />
                    <rect x="82" y="122" width="236" height="15" fill="#FF8787" rx="13" opacity="0.6" />
                    {/* Side panel lines */}
                    <line x1="150" y1="130" x2="150" y2="195" stroke="#C62828" strokeWidth="2" opacity="0.3" />
                    <line x1="250" y1="130" x2="250" y2="195" stroke="#C62828" strokeWidth="2" opacity="0.3" />
                    {/* Bottom edge highlight */}
                    <rect x="80" y="195" width="240" height="5" fill="#B71C1C" rx="2" />
                </g>
            )}
            
            {/* Roof with realistic gradient */}
            {carParts.includes('roof') && (
                <g className="car-part-appear">
                    <defs>
                        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#FF5252', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#E53935', stopOpacity: 1}} />
                        </linearGradient>
                    </defs>
                    <polygon points="130,120 160,90 240,90 270,120" fill="url(#roofGradient)" />
                    <polygon points="135,118 163,93 237,93 265,118" fill="#FF6B6B" opacity="0.4" />
                </g>
            )}
            
            {/* Wheels with spinning animation */}
            {carParts.includes('wheel1') && (
                <g className="car-part-appear wheel-spin">
                    <circle cx="130" cy="200" r="32" fill="#1A1A1A" />
                    <circle cx="130" cy="200" r="30" fill="#2C3E50" />
                    <circle cx="130" cy="200" r="18" fill="#95A5A6" />
                    <circle cx="130" cy="200" r="12" fill="#34495E" />
                    <circle cx="130" cy="200" r="8" fill="#7F8C8D" />
                    {/* Tire treads */}
                    <rect x="128" y="168" width="4" height="8" fill="#1A1A1A" rx="1" />
                    <rect x="128" y="224" width="4" height="8" fill="#1A1A1A" rx="1" />
                    <rect x="96" y="198" width="8" height="4" fill="#1A1A1A" rx="1" />
                    <rect x="158" y="198" width="8" height="4" fill="#1A1A1A" rx="1" />
                </g>
            )}
            
            {carParts.includes('wheel2') && (
                <g className="car-part-appear wheel-spin">
                    <circle cx="270" cy="200" r="32" fill="#1A1A1A" />
                    <circle cx="270" cy="200" r="30" fill="#2C3E50" />
                    <circle cx="270" cy="200" r="18" fill="#95A5A6" />
                    <circle cx="270" cy="200" r="12" fill="#34495E" />
                    <circle cx="270" cy="200" r="8" fill="#7F8C8D" />
                    {/* Tire treads */}
                    <rect x="268" y="168" width="4" height="8" fill="#1A1A1A" rx="1" />
                    <rect x="268" y="224" width="4" height="8" fill="#1A1A1A" rx="1" />
                    <rect x="236" y="198" width="8" height="4" fill="#1A1A1A" rx="1" />
                    <rect x="298" y="198" width="8" height="4" fill="#1A1A1A" rx="1" />
                </g>
            )}
            
            {/* Windows with realistic reflections */}
            {carParts.includes('window1') && (
                <g className="car-part-appear">
                    <defs>
                        <linearGradient id="windowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#87CEEB', stopOpacity: 0.8}} />
                            <stop offset="50%" style={{stopColor: '#B0E0E6', stopOpacity: 0.6}} />
                            <stop offset="100%" style={{stopColor: '#4682B4', stopOpacity: 0.7}} />
                        </linearGradient>
                    </defs>
                    <polygon points="140,110 165,90 185,90 185,110" fill="url(#windowGradient1)" />
                    <polygon points="142,108 167,92 183,92 183,108" fill="white" opacity="0.3" />
                    <line x1="165" y1="90" x2="185" y2="110" stroke="white" strokeWidth="1" opacity="0.4" />
                </g>
            )}
            
            {carParts.includes('window2') && (
                <g className="car-part-appear">
                    <polygon points="215,110 215,90 235,90 260,110" fill="url(#windowGradient1)" />
                    <polygon points="217,108 217,92 233,92 258,108" fill="white" opacity="0.3" />
                    <line x1="215" y1="90" x2="235" y2="110" stroke="white" strokeWidth="1" opacity="0.4" />
                </g>
            )}
            
            {/* Doors with realistic panels */}
            {carParts.includes('door1') && (
                <g className="car-part-appear">
                    <rect x="90" y="130" width="60" height="65" fill="#E53935" rx="5" />
                    <rect x="92" y="132" width="56" height="10" fill="#FF6B6B" opacity="0.5" rx="3" />
                    <circle cx="138" cy="162" r="5" fill="#B8860B" />
                    <circle cx="138" cy="162" r="3" fill="#FFD700" />
                    <rect x="95" y="145" width="50" height="35" fill="none" stroke="#C62828" strokeWidth="2" rx="3" />
                </g>
            )}
            
            {carParts.includes('door2') && (
                <g className="car-part-appear">
                    <rect x="250" y="130" width="60" height="65" fill="#E53935" rx="5" />
                    <rect x="252" y="132" width="56" height="10" fill="#FF6B6B" opacity="0.5" rx="3" />
                    <circle cx="262" cy="162" r="5" fill="#B8860B" />
                    <circle cx="262" cy="162" r="3" fill="#FFD700" />
                    <rect x="255" y="145" width="50" height="35" fill="none" stroke="#C62828" strokeWidth="2" rx="3" />
                </g>
            )}
            
            {/* Headlights with beam effect */}
            {carParts.includes('light1') && (
                <g className="car-part-appear">
                    <defs>
                        <radialGradient id="lightBeam1">
                            <stop offset="0%" style={{stopColor: '#FFFF00', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#FFF59D', stopOpacity: 0.3}} />
                        </radialGradient>
                    </defs>
                    <ellipse cx="75" cy="150" rx="10" ry="14" fill="url(#lightBeam1)" className="headlight-glow" />
                    <ellipse cx="75" cy="150" rx="7" ry="10" fill="#FFFFE0" />
                    <ellipse cx="73" cy="148" rx="3" ry="4" fill="white" opacity="0.8" />
                </g>
            )}
            
            {carParts.includes('light2') && (
                <g className="car-part-appear">
                    <ellipse cx="325" cy="150" rx="10" ry="14" fill="url(#lightBeam1)" className="headlight-glow" />
                    <ellipse cx="325" cy="150" rx="7" ry="10" fill="#FFFFE0" />
                    <ellipse cx="323" cy="148" rx="3" ry="4" fill="white" opacity="0.8" />
                    {/* Tail light on back */}
                    <rect x="318" y="155" width="12" height="8" fill="#FF0000" rx="2" opacity="0.8" className="tail-light-blink" />
                </g>
            )}
            
            {/* Grille and bumper details */}
            {carParts.includes('body') && (
                <g className="car-part-appear">
                    <rect x="68" y="145" width="12" height="30" fill="#2C3E50" rx="2" />
                    <rect x="70" y="148" width="8" height="4" fill="#555" rx="1" />
                    <rect x="70" y="158" width="8" height="4" fill="#555" rx="1" />
                    <rect x="70" y="168" width="8" height="4" fill="#555" rx="1" />
                </g>
            )}
        </svg>
    );

    const renderTruck = () => (
        <svg viewBox="0 0 400 250" className="car-svg">
            {/* Truck Body (Cargo) */}
            {carParts.includes('body') && (
                <g className="car-part-appear">
                    <rect x="200" y="110" width="130" height="90" fill="#4CAF50" rx="10" className="car-body-3d" />
                </g>
            )}
            
            {/* Cab/Roof */}
            {carParts.includes('roof') && (
                <g className="car-part-appear">
                    <rect x="70" y="120" width="120" height="80" fill="#66BB6A" rx="10" />
                    <polygon points="70,120 100,90 170,90 190,120" fill="#81C784" />
                </g>
            )}
            
            {/* Wheels */}
            {carParts.includes('wheel1') && (
                <g className="car-part-appear">
                    <circle cx="120" cy="205" r="35" fill="#2C3E50" className="wheel-3d" />
                    <circle cx="120" cy="205" r="18" fill="#95A5A6" />
                    <circle cx="120" cy="205" r="10" fill="#34495E" />
                </g>
            )}
            
            {carParts.includes('wheel2') && (
                <g className="car-part-appear">
                    <circle cx="290" cy="205" r="35" fill="#2C3E50" className="wheel-3d" />
                    <circle cx="290" cy="205" r="18" fill="#95A5A6" />
                    <circle cx="290" cy="205" r="10" fill="#34495E" />
                </g>
            )}
            
            {/* Windows */}
            {carParts.includes('window1') && (
                <g className="car-part-appear">
                    <rect x="80" y="130" width="40" height="35" fill="#87CEEB" opacity="0.7" rx="5" />
                </g>
            )}
            
            {carParts.includes('window2') && (
                <g className="car-part-appear">
                    <polygon points="125,130 125,165 160,165 170,130" fill="#87CEEB" opacity="0.7" />
                </g>
            )}
            
            {/* Doors/Panels */}
            {carParts.includes('door1') && (
                <g className="car-part-appear">
                    <rect x="80" y="170" width="100" height="30" fill="#558B2F" rx="5" />
                    <circle cx="160" cy="185" r="4" fill="#FFD700" />
                </g>
            )}
            
            {carParts.includes('door2') && (
                <g className="car-part-appear">
                    <rect x="210" y="130" width="110" height="50" fill="#388E3C" rx="5" />
                    <line x1="265" y1="135" x2="265" y2="175" stroke="#2E7D32" strokeWidth="3" />
                </g>
            )}
            
            {/* Lights */}
            {carParts.includes('light1') && (
                <g className="car-part-appear">
                    <circle cx="60" cy="160" r="10" fill="#FFF59D" className="light-glow" />
                </g>
            )}
            
            {carParts.includes('light2') && (
                <g className="car-part-appear">
                    <rect x="325" y="155" width="15" height="20" fill="#FF5252" rx="3" />
                </g>
            )}
        </svg>
    );

    const renderSports = () => (
        <svg viewBox="0 0 400 250" className="car-svg">
            {/* Sports Car Body */}
            {carParts.includes('body') && (
                <g className="car-part-appear">
                    <ellipse cx="200" cy="140" rx="130" ry="50" fill="#9C27B0" className="car-body-3d" />
                    <rect x="70" y="140" width="260" height="50" fill="#BA68C8" rx="25" />
                </g>
            )}
            
            {/* Roof */}
            {carParts.includes('roof') && (
                <g className="car-part-appear">
                    <ellipse cx="200" cy="115" rx="80" ry="35" fill="#7B1FA2" />
                    <path d="M 150,120 Q 200,90 250,120" fill="#9C27B0" />
                </g>
            )}
            
            {/* Wheels */}
            {carParts.includes('wheel1') && (
                <g className="car-part-appear">
                    <circle cx="120" cy="195" r="32" fill="#2C3E50" className="wheel-3d" />
                    <circle cx="120" cy="195" r="16" fill="#E91E63" />
                    <circle cx="120" cy="195" r="8" fill="#34495E" />
                </g>
            )}
            
            {carParts.includes('wheel2') && (
                <g className="car-part-appear">
                    <circle cx="280" cy="195" r="32" fill="#2C3E50" className="wheel-3d" />
                    <circle cx="280" cy="195" r="16" fill="#E91E63" />
                    <circle cx="280" cy="195" r="8" fill="#34495E" />
                </g>
            )}
            
            {/* Windows */}
            {carParts.includes('window1') && (
                <g className="car-part-appear">
                    <ellipse cx="165" cy="115" rx="25" ry="20" fill="#37474F" opacity="0.8" />
                </g>
            )}
            
            {carParts.includes('window2') && (
                <g className="car-part-appear">
                    <ellipse cx="235" cy="115" rx="25" ry="20" fill="#37474F" opacity="0.8" />
                </g>
            )}
            
            {/* Doors/Side Vents */}
            {carParts.includes('door1') && (
                <g className="car-part-appear">
                    <rect x="90" y="145" width="50" height="35" fill="#7B1FA2" rx="8" />
                    <line x1="95" y1="152" x2="135" y2="152" stroke="#4A148C" strokeWidth="2" />
                    <line x1="95" y1="160" x2="135" y2="160" stroke="#4A148C" strokeWidth="2" />
                    <line x1="95" y1="168" x2="135" y2="168" stroke="#4A148C" strokeWidth="2" />
                </g>
            )}
            
            {carParts.includes('door2') && (
                <g className="car-part-appear">
                    <rect x="260" y="145" width="50" height="35" fill="#7B1FA2" rx="8" />
                    <line x1="265" y1="152" x2="305" y2="152" stroke="#4A148C" strokeWidth="2" />
                    <line x1="265" y1="160" x2="305" y2="160" stroke="#4A148C" strokeWidth="2" />
                    <line x1="265" y1="168" x2="305" y2="168" stroke="#4A148C" strokeWidth="2" />
                </g>
            )}
            
            {/* Lights */}
            {carParts.includes('light1') && (
                <g className="car-part-appear">
                    <ellipse cx="60" cy="155" rx="12" ry="8" fill="#00E5FF" className="light-glow" />
                </g>
            )}
            
            {carParts.includes('light2') && (
                <g className="car-part-appear">
                    <ellipse cx="340" cy="155" rx="12" ry="8" fill="#00E5FF" className="light-glow" />
                </g>
            )}
        </svg>
    );

    const getCarName = () => {
        switch(carModel) {
            case 'truck': return '🚛 Truck';
            case 'sports': return '🏎️ Sports Car';
            default: return '🚗 Sedan';
        }
    };

    return (
        <div className="car-display-container">
            <div className="car-model-label">{getCarName()}</div>
            <div className="car-stage">
                {carModel === 'sedan' && renderSedan()}
                {carModel === 'truck' && renderTruck()}
                {carModel === 'sports' && renderSports()}
            </div>
            
            <div className="car-progress-info">
                <div className="progress-text">Car Completion: {Math.round(completionPercentage)}%</div>
                <div className="progress-bar-container">
                    <div 
                        className="progress-bar-fill-car" 
                        style={{ width: `${completionPercentage}%` }}
                    >
                        {completionPercentage > 10 && `${Math.round(completionPercentage)}%`}
                    </div>
                </div>
                <div className="parts-collected">
                    Parts: {carParts.length} / {totalParts}
                </div>
            </div>
        </div>
    );
}

export default CarDisplay;
