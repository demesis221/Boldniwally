import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../../components/common/VideoCard';
import { PlayIcon } from '../../components/common/Icons';
import './Home.css';

const mockVideos = [
  {
    id: '1',
    title: 'One Piece Episode 1000 - Epic Battle Begins',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=320&h=180&fit=crop',
    uploader: 'Anime Central',
    views: 1250000,
    uploadDate: new Date('2024-01-15'),
    duration: '24:15',
    category: 'Anime'
  },
  {
    id: '2',
    title: 'Demon Slayer Season 3 - Full Episode',
    thumbnail: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=320&h=180&fit=crop',
    uploader: 'Anime Hub',
    views: 890000,
    uploadDate: new Date('2024-01-20'),
    duration: '23:45',
    category: 'Anime'
  },
  {
    id: '3',
    title: 'Top 10 Anime Moments of 2024',
    thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=320&h=180&fit=crop',
    uploader: 'WatchMojo Anime',
    views: 2100000,
    uploadDate: new Date('2024-01-10'),
    duration: '15:30',
    category: 'Trending'
  },
  {
    id: '4',
    title: 'Attack on Titan Final Season Part 3',
    thumbnail: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=320&h=180&fit=crop',
    uploader: 'Crunchyroll',
    views: 3500000,
    uploadDate: new Date('2024-01-05'),
    duration: '28:00',
    category: 'Anime'
  },
  {
    id: '5',
    title: 'Jujutsu Kaisen Movie Review',
    thumbnail: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=320&h=180&fit=crop',
    uploader: 'Anime Reviews',
    views: 450000,
    uploadDate: new Date('2024-01-22'),
    duration: '12:20',
    category: 'Movies'
  },
  {
    id: '6',
    title: 'Naruto vs Sasuke - Best Fight Scenes',
    thumbnail: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=320&h=180&fit=crop',
    uploader: 'Epic Anime',
    views: 5200000,
    uploadDate: new Date('2024-01-01'),
    duration: '18:45',
    category: 'Anime'
  },
];

const categories = ['All', 'Anime', 'Movies', 'Shorts', 'Trending'];

const featuredAnime = [
  {
    id: '1',
    title: 'One Piece Episode 1000',
    description: 'The epic battle continues as Luffy faces his greatest challenge yet!',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=500&fit=crop',
    category: 'New Release',
  },
  {
    id: '4',
    title: 'Attack on Titan Final Season',
    description: 'The final battle for humanity begins in this epic conclusion!',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&h=500&fit=crop',
    category: 'Trending Now',
  },
  {
    id: '2',
    title: 'Demon Slayer Season 3',
    description: 'Tanjiro and friends face their most dangerous mission yet!',
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1200&h=500&fit=crop',
    category: 'Popular',
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Romance', 'Sci-Fi', 'Thriller'];

  const toggleGenre = (genre) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredAnime.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredVideos = selectedCategory === 'All' 
    ? mockVideos 
    : mockVideos.filter(v => v.category === selectedCategory);

  return (
    <div className="home">
      <div className="hero-carousel">
        <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredAnime.map((anime, index) => (
            <div key={anime.id} className="carousel-slide">
              <img src={anime.image} alt={anime.title} />
              <div className="carousel-overlay">
                <div className="container">
                  <div className="carousel-content">
                    <span className="carousel-badge">{anime.category}</span>
                    <h1>{anime.title}</h1>
                    <div className="carousel-description">
                      <p>{anime.description}</p>
                      <div className="carousel-actions">
                        <Link to={`/watch/${anime.id}`} className="btn-play">
                          <PlayIcon /> Watch Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {featuredAnime.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="filter-section">
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="filter-dropdown-wrapper">
            <button className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <line x1="1" y1="14" x2="7" y2="14"/>
                <line x1="9" y1="8" x2="15" y2="8"/>
                <line x1="17" y1="16" x2="23" y2="16"/>
              </svg>
              Filters
            </button>
            {showFilters && (
              <div className="filter-dropdown">
                <h4>Genre</h4>
                <div className="filter-options">
                  {genres.map(genre => (
                    <label key={genre} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedGenres.includes(genre)}
                        onChange={() => toggleGenre(genre)}
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="video-grid">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
