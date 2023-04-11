import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>Question Master</h1>
      <div>Multiplayer</div>
      <div>Leader Board</div>
      <Link to="/QuickPlay" style={{ textDecoration: 'none' }}>
        <button type="button">Quick Play</button>
      </Link>
    </div>
  );
}
