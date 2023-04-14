import { Link } from 'react-router-dom';
import { logout } from 'thin-backend';
import image1 from '../images/bookTree.png';
import Navbar from '../shared/Navbar';

export default function Home() {
  return (
    <>
      <Navbar needHomeIcon needTitle={false} />
      <div className="home-container">
        <h1>Question Master</h1>
        <img
          src={image1}
          alt="logo"
          style={{
            maxHeight: '352px',
            maxWidth: '356px',
            padding: '20px',
            marginTop: '10%',
          }}
        />
        <div className="home-body">
          <button type="button" onClick={logout}>
            Logout
          </button>
          <div>Multiplayer (Coming soon!)</div>
          <div>Leader Board (Coming soon!)</div>
          <Link to="/QuickPlay" style={{ textDecoration: 'none' }}>
            <button type="button">Quick Play</button>
          </Link>
        </div>
      </div>
    </>
  );
}
