import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3><span className="logo-bold">Younime</span>.TV</h3>
          <p>Your Anime Streaming Platform</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Upload</a>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Younime.TV. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
