import { Link, useParams } from 'react-router-dom';

export default function Results() {
  const { score, name } = useParams();

  return (
    <>
      <div className="container">
        <h1>{`Great job ${name}!`}</h1>
        <h3>{score} Correct Answers</h3>
      </div>
      <div className="container">
        <div>
          <Link to={`/StartGame/${name}`}>Play Again</Link>
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
