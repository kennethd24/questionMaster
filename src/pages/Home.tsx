import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Question Master</h1>
      <div className="home-body">
        <div>Multiplayer (Coming soon!)</div>
        <div>Leader Board (Coming soon!)</div>
        <Link to="/QuickPlay" style={{ textDecoration: 'none' }}>
          <button type="button">Quick Play</button>
        </Link>
      </div>
    </div>
  );
}
