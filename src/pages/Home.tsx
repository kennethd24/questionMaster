import { Link } from 'react-router-dom';
import image1 from '../images/bookTree.png';
import Navbar from '../shared/Navbar';

export default function Home() {
  return (
    <>
      <Navbar needHomeIcon={true} needTitle={false} />
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
