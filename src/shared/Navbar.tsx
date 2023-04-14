import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from 'thin-backend';
import { useCurrentUser } from 'thin-backend-react';
import image1 from '../images/bookTree.png';

interface NavBarProps {
  needHomeIcon: boolean;
  needTitle: boolean;
}

export default function Navbar({
  needHomeIcon,
  needTitle,
}: NavBarProps): JSX.Element {
  const user = useCurrentUser();
  const [hideLogout, setHideLogout] = useState(false);
  // home icon, Question Master, email (dropdown to logout)

  return (
    <div className="login-container">
      <div id="login-home">
        <Link to="/" style={{ display: needHomeIcon ? 'block' : 'none' }}>
          <img
            src={image1}
            alt="logo"
            style={{
              maxHeight: '75px',
              padding: '20px',
              marginTop: '25px',
              marginRight: '10px',
            }}
          />
        </Link>
      </div>
    </div>
  );
}
