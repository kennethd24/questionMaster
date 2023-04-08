import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function QuickPlay() {
  const [currentName, setCurrentName] = useState('');
  let name = '';

  if (!currentName) {
    name = 'Guest';
  } else {
    name = currentName;
  }

  return (
    <>
      <div className="container">
        <h1>Quick Play</h1>
      </div>
      <div className="container">
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
        <div>
          <input
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div>Categories</div>
        <div>Difficulty</div>
        <div>
          <Link to={`/StartGame/${name}`}>Start Game</Link>
        </div>
      </div>
    </>
  );
}
