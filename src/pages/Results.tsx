import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { rightAnswers, name, score } = state;

  function handleClick() {
    navigate('/QuickPlay', { state: name });
  }

  return (
    <>
      <div className="container">
        <h1>{`Great job ${name}!`}</h1>
        <h3>{rightAnswers} Correct Answers</h3>
        <h3>Score: {score} </h3>
      </div>
      <div className="container">
        <div>
          <button type="submit" onClick={handleClick}>
            Play Again
          </button>
        </div>
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </>
  );
}
