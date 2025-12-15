import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon, SearchIcon, LogoIcon } from './Icons';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <LogoIcon />
          <span className="logo-bold">Younime</span>
          <span className="logo-text">.TV</span>
        </Link>

        <div className="navbar-search">
          <input type="text" placeholder="Search videos..." />
          <button className="search-btn"><SearchIcon /></button>
        </div>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          {user ? (
            <>
              <Link to="/upload" className="btn-upload">+ Upload</Link>
              <Link to="/profile" className="user-avatar">{user.name[0]}</Link>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/register" className="btn-register">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
