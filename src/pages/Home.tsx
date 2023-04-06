import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>
        <h1>Question Master</h1>
      </div>
      <div>
        <div>Multiplayer</div>
        <div>Leadership</div>
        <div>Statistics</div>
        <div>
          <Link to="/QuickPlay">Quick Play</Link>
        </div>
      </div>
    </>
  );
}
