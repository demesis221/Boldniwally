import { useState, useEffect } from 'react';
import { LogoIcon } from './Icons';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-background"></div>
      <div className="loading-overlay"></div>
      <div className="loading-content">
        <div className="logo-container">
          <div className="loading-logo-brand">
            <LogoIcon />
            <h1 className="loading-logo-text">
              <span className="loading-logo-bold">Younime</span>
              <span className="loading-logo-dot">.TV</span>
            </h1>
          </div>
          <p className="tagline">Your Anime Streaming Platform</p>
        </div>
        <div className="loading-animation">
          <div className="spinner">
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
            <div className="spinner-dot"></div>
          </div>
          <p className="loading-text">Loading your anime experience...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;