import { useState } from 'react';

const mockQuestions = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  question: `Mock Crypto Question ${i + 1}?`,
  options: ['A', 'B'],
  correct: 'A',
}));

export default function MockCryptoQuiz({ tournamentId, wallet, onComplete }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const current = mockQuestions[index];

  const handleClick = async (selected) => {
    console.log('Clicked:', selected);

    if (selected === current.correct) {
      setScore((prev) => prev + 50);
    }

    if (index < mockQuestions.length - 1) {
      setIndex(index + 1);
    } else {
      // Final question — submit score
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wallet,
          gameBlock: tournamentId,
          score,
        }),
      });

      const data = await res.json();
      console.log('Submission response:', data);
      setSubmitted(true);
      onComplete(score);
    }
  };

  if (submitted) return <p>✅ Done! Final score: {score}</p>;

  return (
    <div>
      <h3>Question {index + 1} / 20</h3>
      <p>{current.question}</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleClick(opt)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#eee',
              border: '1px solid #aaa',
              cursor: 'pointer',
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
