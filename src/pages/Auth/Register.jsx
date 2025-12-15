import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LogoIcon } from '../../components/common/Icons';
import './Auth.css';

const carouselImages = [
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=600&h=800&fit=crop',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&h=800&fit=crop',
];

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData.email, formData.password, formData.name);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-layout">
        <div className="auth-carousel">
          <div className="carousel-images" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {carouselImages.map((img, index) => (
              <img key={index} src={img} alt={`Anime ${index + 1}`} />
            ))}
          </div>
          <div className="auth-carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`auth-indicator ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">
            <LogoIcon />
          </div>
          <h1><span className="logo-bold">Younime</span>.TV</h1>
          <p>Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="auth-submit">Sign Up</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;
