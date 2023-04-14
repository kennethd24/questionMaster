import { Link, useLocation, useNavigate } from 'react-router-dom';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { rightAnswers, name, score, defaultCategory, defaultDifficulty } =
    state;

  const highScores = useQuery(
    query('scores')
      .where('category', defaultCategory)
      .where('difficulty', defaultDifficulty)
      .whereNot('name', 'Guest')
      .orderByDesc('score')
      .limit(5)
  );

  function handleClick() {
    navigate('/QuickPlay', { state: name });
  }

  return (
    <div className="container">
      <h1>{`Great job ${name}!`}</h1>
      <div className="score-Container">
        <h3>{`Correct Answer${
          rightAnswers > 1 ? 's' : ''
        }: ${rightAnswers}`}</h3>
        <h3>Score: {score} </h3>
      </div>
      <div className="high-score-container">
        {highScores?.map((user, index) => (
          <div className="high-score" key={user.createdAt}>
            {`${index + 1}. ${user.name} ${user.score} `}
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={handleClick}
          style={{ textDecoration: 'none' }}
        >
          Play Again
        </button>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button type="button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
