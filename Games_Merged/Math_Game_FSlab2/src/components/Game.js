import React, { useState, useEffect } from 'react';
import CarDisplay from './CarDisplay';

function Game({ onGoHome, onViewProgress, updateStats, currentStats }) {
    const [question, setQuestion] = useState(null);
    const [answerState, setAnswerState] = useState('idle'); // 'idle' | 'wrong' | 'correct'
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        generateQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const generateQuestion = () => {
        const difficulty = currentStats.difficultyLevel || 'easy';
        const questionTypes = ['counting', 'addition', 'subtraction', 'multiplication', 'pattern'];
        const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

        let maxCount, maxNum1, maxNum2, maxMultNum;
        if (difficulty === 'easy') {
            maxCount = 5; maxNum1 = 5; maxNum2 = 5; maxMultNum = 3;
        } else if (difficulty === 'medium') {
            maxCount = 8; maxNum1 = 10; maxNum2 = 10; maxMultNum = 5;
        } else {
            maxCount = 12; maxNum1 = 15; maxNum2 = 15; maxMultNum = 10;
        }

        if (questionType === 'counting') {
            const count = Math.floor(Math.random() * maxCount) + 1;
            const objects = ['🔧', '⚙️', '🔩', '🛠️', '🔨', '🪛'];
            const randomObject = objects[Math.floor(Math.random() * objects.length)];
            setQuestion({ type: 'counting', count, object: randomObject, correctAnswer: count, options: generateOptions(count) });
        } else if (questionType === 'addition') {
            const num1 = Math.floor(Math.random() * maxNum1) + 1;
            const num2 = Math.floor(Math.random() * maxNum2) + 1;
            const sum = num1 + num2;
            setQuestion({ type: 'addition', num1, num2, correctAnswer: sum, options: generateOptions(sum) });
        } else if (questionType === 'subtraction') {
            const num1 = Math.floor(Math.random() * maxNum1) + 3;
            const num2 = Math.floor(Math.random() * num1) + 1;
            const difference = num1 - num2;
            setQuestion({ type: 'subtraction', num1, num2, correctAnswer: difference, options: generateOptions(difference) });
        } else if (questionType === 'multiplication') {
            const num1 = Math.floor(Math.random() * maxMultNum) + 1;
            const num2 = Math.floor(Math.random() * maxMultNum) + 1;
            const product = num1 * num2;
            setQuestion({ type: 'multiplication', num1, num2, correctAnswer: product, options: generateOptions(product) });
        } else {
            const patterns = difficulty === 'easy' ? [
                { sequence: ['🔴', '🔵', '🔴', '🔵', '🔴'], answer: '🔵', options: ['🔵', '🔴', '🟢', '🟡'] },
                { sequence: ['⭐', '⭐', '🌟', '⭐', '⭐'], answer: '🌟', options: ['🌟', '⭐', '✨', '💫'] }
            ] : difficulty === 'medium' ? [
                { sequence: ['🟥', '🟧', '🟨', '🟥', '🟧'], answer: '🟨', options: ['🟨', '🟥', '🟧', '🟩'] },
                { sequence: ['🚗', '🚗', '🚙', '🚗', '🚗'], answer: '🚙', options: ['🚙', '🚗', '🚕', '🚐'] },
                { sequence: ['🔵', '🔵', '🔴', '🔵', '🔵'], answer: '🔴', options: ['🔴', '🔵', '🟢', '🟡'] }
            ] : [
                { sequence: ['🌟', '⭐', '✨', '🌟', '⭐'], answer: '✨', options: ['✨', '🌟', '⭐', '💫'] },
                { sequence: ['🟦', '🟪', '🟦', '🟪', '🟦'], answer: '🟪', options: ['🟪', '🟦', '🟨', '🟩'] },
                { sequence: ['🚙', '🚕', '🚐', '🚙', '🚕'], answer: '🚐', options: ['🚐', '🚙', '🚕', '🚗'] }
            ];
            const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];
            setQuestion({ type: 'pattern', sequence: selectedPattern.sequence, correctAnswer: selectedPattern.answer, options: selectedPattern.options });
        }

        setAnswerState('idle');
        setFeedback('');
    };

    const generateOptions = (correctAnswer) => {
        const options = [correctAnswer];
        while (options.length < 3) {
            const wrongAnswer = Math.max(1, correctAnswer + Math.floor(Math.random() * 5) - 2);
            if (!options.includes(wrongAnswer)) options.push(wrongAnswer);
        }
        return options.sort(() => Math.random() - 0.5);
    };

    const handleAnswer = (answer) => {
        if (answerState !== 'idle') return;
        const isCorrect = answer === question.correctAnswer;

        if (isCorrect) {
            const willCompleteCar = currentStats.carParts.length === 9;
            updateStats(true);
            setAnswerState('correct');
            if (willCompleteCar) {
                setFeedback('🎉 CAR COMPLETED! Starting a new car! 🚗💨');
            } else {
                const messages = [
                    'Perfect! Car part added! 🚗✨',
                    'Great job! Building your car! 🔧💫',
                    'Excellent! New part installed! 🛠️⭐',
                    'Well done! Car is growing! 🚙🎉',
                    'Amazing work! Keep building! 🏆🔩'
                ];
                setFeedback(messages[Math.floor(Math.random() * messages.length)]);
            }
            setTimeout(() => generateQuestion(), willCompleteCar ? 4000 : 2000);
        } else {
            setAnswerState('wrong');
            setFeedback(`Oops! That's not right. Try again! 💪`);
        }
    };

    const handleRetry = () => {
        setAnswerState('idle');
        setFeedback('');
    };

    const getDifficultyBadge = () => {
        const difficulty = currentStats.difficultyLevel || 'easy';
        const badges = {
            easy: { icon: '🟢', text: 'Easy', color: '#4CAF50' },
            medium: { icon: '🟡', text: 'Medium', color: '#FF9800' },
            hard: { icon: '🔴', text: 'Hard', color: '#F44336' }
        };
        const badge = badges[difficulty];
        return (
            <span className="difficulty-badge" style={{ backgroundColor: badge.color }}>
                {badge.icon} {badge.text}
            </span>
        );
    };

    if (!question) {
        return <div className="card"><h2>Loading garage...</h2></div>;
    }

    const renderQuestion = () => {
        if (question.type === 'counting') return (
            <>
                <h3>Count the tools! 🔧</h3>
                <div className="visual-container">
                    {Array(question.count).fill(question.object).map((obj, i) => (
                        <span key={i} className="game-object">{obj}</span>
                    ))}
                </div>
            </>
        );
        if (question.type === 'addition') return (
            <>
                <h3>Add the parts! ➕</h3>
                <div className="visual-container">
                    <div className="math-problem">
                        <div className="math-group">
                            <div className="group-label">Group 1</div>
                            <div className="objects-row">
                                {Array(question.num1).fill('🔩').map((o, i) => <span key={i} className="game-object">{o}</span>)}
                            </div>
                        </div>
                        <span className="operator">+</span>
                        <div className="math-group">
                            <div className="group-label">Group 2</div>
                            <div className="objects-row">
                                {Array(question.num2).fill('⚙️').map((o, i) => <span key={i} className="game-object">{o}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        if (question.type === 'subtraction') return (
            <>
                <h3>Subtract the parts! ➖</h3>
                <div className="visual-container">
                    <div className="math-problem">
                        <div className="math-group">
                            <div className="group-label">Start with</div>
                            <div className="objects-row">
                                {Array(question.num1).fill('🔧').map((o, i) => <span key={i} className="game-object">{o}</span>)}
                            </div>
                        </div>
                        <span className="operator">-</span>
                        <div className="math-group">
                            <div className="group-label">Remove</div>
                            <div className="objects-row">
                                {Array(question.num2).fill('🔧').map((o, i) => <span key={i} className="game-object faded">{o}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        if (question.type === 'multiplication') return (
            <>
                <h3>Multiply! How many in all? ✖️</h3>
                <div className="visual-container">
                    <div className="multiplication-text">{question.num1} groups of {question.num2}</div>
                    <div className="multiplication-groups">
                        {Array(question.num1).fill(null).map((_, gi) => (
                            <div key={gi} className="multiply-group">
                                {Array(question.num2).fill('🛠️').map((o, i) => <span key={i} className="game-object">{o}</span>)}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
        return (
            <>
                <h3>Find the pattern! What comes next? 🎨</h3>
                <div className="visual-container">
                    <div className="pattern-sequence">
                        {question.sequence.map((item, i) => <span key={i} className="game-object">{item}</span>)}
                        <span className="pattern-arrow">→ ?</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="game-split-layout">
            {/* ── LEFT PANEL: Live Car Building ── */}
            <div className="split-left">
                <div className="card garage-side-card">
                    <h2 className="garage-title">🚗 Your Garage</h2>

                    <div className="garage-stats">
                        <div className="stat-pill">
                            <span className="stat-pill-label">Parts</span>
                            <span className="stat-pill-value">{currentStats.carParts.length} / 10</span>
                        </div>
                        <div className="stat-pill">
                            <span className="stat-pill-label">Cars Built</span>
                            <span className="stat-pill-value">{currentStats.completedCars.length}</span>
                        </div>
                    </div>

                    {/* Progress bar for current car */}
                    <div className="car-build-progress-wrap">
                        <div className="car-build-progress-bar">
                            <div
                                className="car-build-progress-fill"
                                style={{ width: `${(currentStats.carParts.length / 10) * 100}%` }}
                            />
                        </div>
                        <span className="car-build-progress-label">
                            {currentStats.carParts.length === 0
                                ? 'Start answering to build!'
                                : currentStats.carParts.length === 10
                                    ? '🎉 Car Complete!'
                                    : `${10 - currentStats.carParts.length} parts to go!`}
                        </span>
                    </div>

                    {/* Live car SVG */}
                    <CarDisplay carParts={currentStats.carParts} carModel={currentStats.currentCarModel} />

                    {/* Stars */}
                    <div className="garage-stars">
                        {Array(Math.min(currentStats.stars, 10)).fill('⭐').map((s, i) => (
                            <span key={i} className="garage-star">{s}</span>
                        ))}
                        {currentStats.stars > 10 && <span className="extra-stars">+{currentStats.stars - 10}</span>}
                    </div>
                </div>
            </div>

            {/* ── RIGHT PANEL: Question ── */}
            <div className="split-right">
                <div className="card question-side-card">
                    {/* Top bar */}
                    <div className="question-topbar">
                        {getDifficultyBadge()}
                        <div className="topbar-actions">
                            <button className="btn btn-small btn-secondary" onClick={onViewProgress}>🏆 Garage</button>
                            <button className="btn btn-small" onClick={onGoHome}>🏠 Home</button>
                        </div>
                    </div>

                    {/* Question body */}
                    <div className="question-body">
                        {renderQuestion()}
                    </div>

                    {/* Answer buttons — shown when idle */}
                    {answerState === 'idle' && (
                        <div className="answer-buttons">
                            {question.options.map((option, index) => (
                                <button
                                    key={index}
                                    className="btn btn-answer"
                                    onClick={() => handleAnswer(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Wrong answer state */}
                    {answerState === 'wrong' && (
                        <div className="answer-feedback-area">
                            <div className="feedback incorrect">
                                ❌ {feedback}
                            </div>
                            <button className="btn btn-retry" onClick={handleRetry}>
                                🔄 Retry Question
                            </button>
                        </div>
                    )}

                    {/* Correct answer state */}
                    {answerState === 'correct' && (
                        <div className="answer-feedback-area">
                            <div className="feedback correct">
                                ✅ {feedback}
                            </div>
                            <p className="next-question-hint">Next question loading...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Game;
