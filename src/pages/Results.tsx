import { Link, useLocation, useNavigate } from 'react-router-dom';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

function HighScores() {
  const category = 'Film & TV';
  const difficulty = 'Easy';

  const highScores = useQuery(
    query('scores')
      .where('category', category)
      .where('difficulty', difficulty)
      .orderByDesc('score')
      .limit(5)
  );

  if (highScores === null) {
    return (
      <>
        <div>High Scores Loading ...</div>;
        <div className="high-score-container">
          <div className="high-score">
            Champion <br /> name and score
          </div>
          <div className="high-score">2nd name and score</div>
          <div className="high-score">3rd name and score</div>
          <div className="high-score">4th name and score</div>
          <div className="high-score">5th name and score</div>
        </div>
        ;
      </>
    );
  }

  return (
    <div className="high-score-container">
      {highScores.map((user, index) => (
        <div className="high-score" key={user.createdAt}>
          {`${index + 1}. ${user.userId} ${user.score}`}
        </div>
      ))}
    </div>
  );
}

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { rightAnswers, name, score } = state;

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
      <HighScores />
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
