import { Link } from 'react-router-dom';

function QuickPlay() {
  return (
    <>
      <div>
        <h1>Quick Play</h1>
      </div>
      <div>
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
        <div>Enter Name</div>
        <div>Categories</div>
        <div>Difficulty</div>
        <div>
          <Link to="/StartGame">Start Game</Link>
        </div>
      </div>
    </>
  );
}

export default QuickPlay;
