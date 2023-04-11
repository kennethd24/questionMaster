import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <h1>Page Not Found</h1>
      <h3>{`Error message: ${location.state}`}</h3>
      <Link to="/">Go Back Home</Link>
    </>
  );
}
