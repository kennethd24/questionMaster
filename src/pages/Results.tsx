import { Link, useParams } from 'react-router-dom';

export default function Results() {
  const { score } = useParams();

  return (
    <>
      <div>
        <h1>Results</h1>
        <h3>{score} Correct Answers!</h3>
      </div>
      <div>
        <div>
          <Link to="/StartGame">Play Again</Link>
        </div>
        <div>Categories</div>
        <div>Difficulty</div>
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </>
  );
}
