import { useParams } from 'react-router-dom';
import VideoCard from '../../components/common/VideoCard';
import { ThumbsUpIcon, ThumbsDownIcon, ShareIcon, SaveIcon, PlayIcon } from '../../components/common/Icons';
import './Watch.css';

const Watch = () => {
  const { id } = useParams();

  const mockVideo = {
    id,
    title: 'One Piece Episode 1000 - Epic Battle Begins',
    description: 'The epic battle continues as Luffy faces his greatest challenge yet. Watch as the Straw Hat Pirates unite for an unforgettable showdown!',
    uploader: 'Anime Central',
    views: 1250000,
    likes: 45000,
    dislikes: 1200,
    uploadDate: new Date('2024-01-15'),
    tags: ['One Piece', 'Anime', 'Action', 'Shonen'],
  };

  const suggestedVideos = [
    {
      id: '2',
      title: 'Demon Slayer Season 3 - Full Episode',
      thumbnail: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=320&h=180&fit=crop',
      uploader: 'Anime Hub',
      views: 890000,
      uploadDate: new Date('2024-01-20'),
      duration: '23:45',
    },
    {
      id: '3',
      title: 'Top 10 Anime Moments of 2024',
      thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=320&h=180&fit=crop',
      uploader: 'WatchMojo Anime',
      views: 2100000,
      uploadDate: new Date('2024-01-10'),
      duration: '15:30',
    },
    {
      id: '4',
      title: 'Attack on Titan Final Season',
      thumbnail: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=320&h=180&fit=crop',
      uploader: 'Crunchyroll',
      views: 3500000,
      uploadDate: new Date('2024-01-05'),
      duration: '28:00',
    },
  ];

  const relatedVideos = [
    {
      id: '5',
      title: 'Jujutsu Kaisen Movie Review',
      thumbnail: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=320&h=180&fit=crop',
      uploader: 'Anime Reviews',
      views: 450000,
      uploadDate: new Date('2024-01-22'),
      duration: '12:20',
    },
    {
      id: '6',
      title: 'Naruto vs Sasuke - Best Fight Scenes',
      thumbnail: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=320&h=180&fit=crop',
      uploader: 'Epic Anime',
      views: 5200000,
      uploadDate: new Date('2024-01-01'),
      duration: '18:45',
    },
    {
      id: '7',
      title: 'My Hero Academia Season 6 Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=320&h=180&fit=crop',
      uploader: 'Hero Watch',
      views: 1800000,
      uploadDate: new Date('2024-01-18'),
      duration: '15:00',
    },
    {
      id: '8',
      title: 'Chainsaw Man Episode 10 Reaction',
      thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=320&h=180&fit=crop',
      uploader: 'Anime Reactions',
      views: 920000,
      uploadDate: new Date('2024-01-12'),
      duration: '20:30',
    },
  ];

  const trendingVideos = [
    {
      id: '9',
      title: 'Spy x Family Season 2 Episode 5',
      thumbnail: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=320&h=180&fit=crop',
      uploader: 'Anime Stream',
      views: 4200000,
      uploadDate: new Date('2024-01-23'),
      duration: '24:00',
    },
    {
      id: '10',
      title: 'Bleach TYBW Arc - Epic Moments',
      thumbnail: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=320&h=180&fit=crop',
      uploader: 'Bleach Fans',
      views: 3800000,
      uploadDate: new Date('2024-01-21'),
      duration: '16:30',
    },
    {
      id: '11',
      title: 'Frieren: Beyond Journey\'s End Review',
      thumbnail: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=320&h=180&fit=crop',
      uploader: 'Anime Critics',
      views: 2900000,
      uploadDate: new Date('2024-01-19'),
      duration: '14:20',
    },
  ];

  const mockComments = [
    {
      id: 1,
      user: 'Anime Fan',
      avatar: 'https://i.pravatar.cc/150?img=1',
      comment: 'This episode was absolutely incredible! The animation quality is top-notch!',
      likes: 1200,
      timeAgo: '2 days ago',
    },
    {
      id: 2,
      user: 'Luffy Lover',
      avatar: 'https://i.pravatar.cc/150?img=12',
      comment: 'Best episode of the season! Can\'t wait for the next one!',
      likes: 850,
      timeAgo: '3 days ago',
    },
    {
      id: 3,
      user: 'One Piece Expert',
      avatar: 'https://i.pravatar.cc/150?img=33',
      comment: 'The way they adapted this scene from the manga is perfect. Studio did an amazing job!',
      likes: 2100,
      timeAgo: '5 days ago',
    },
  ];

  return (
    <div className="watch-page">
      <div className="container">
        <div className="watch-layout">
          <div className="video-section">
            <div className="video-player">
              <div className="player-placeholder">
                <PlayIcon />
                <p>Video Player</p>
                <small>Video ID: {id}</small>
              </div>
            </div>

            <div className="video-details">
              <h1 className="video-title">{mockVideo.title}</h1>
              
              <div className="video-actions">
                <div className="video-stats">
                  <span>{mockVideo.views.toLocaleString()} views</span>
                </div>
                <div className="action-buttons">
                  <button className="action-btn">
                    <ThumbsUpIcon /> {mockVideo.likes.toLocaleString()}
                  </button>
                  <button className="action-btn">
                    <ThumbsDownIcon /> {mockVideo.dislikes.toLocaleString()}
                  </button>
                  <button className="action-btn"><ShareIcon /> Share</button>
                  <button className="action-btn"><SaveIcon /> Save</button>
                </div>
              </div>

              <div className="channel-info">
                <div className="channel-avatar">{mockVideo.uploader[0]}</div>
                <div className="channel-details">
                  <h3>{mockVideo.uploader}</h3>
                  <p>1.2M subscribers</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>

              <div className="video-description">
                <p>{mockVideo.description}</p>
                <div className="video-tags">
                  {mockVideo.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>

              <div className="comments-section">
                <h3>{mockComments.length} Comments</h3>
                
                <div className="comment-input">
                  <img src="https://i.pravatar.cc/150?img=68" alt="User" className="comment-avatar" />
                  <input type="text" placeholder="Add a comment..." />
                </div>

                <div className="comments-list">
                  {mockComments.map(comment => (
                    <div key={comment.id} className="comment">
                      <img src={comment.avatar} alt={comment.user} className="comment-avatar" />
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-user">{comment.user}</span>
                          <span className="comment-time">{comment.timeAgo}</span>
                        </div>
                        <p className="comment-text">{comment.comment}</p>
                        <div className="comment-actions">
                          <button className="comment-like">
                            <ThumbsUpIcon /> {comment.likes}
                          </button>
                          <button className="comment-reply">Reply</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="related-videos-section">
                <h3>Related Videos</h3>
                <div className="related-videos-grid">
                  {relatedVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions-section">
            <h3>Suggested Videos</h3>
            <div className="suggestions-list">
              {suggestedVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            <div className="trending-section">
              <h3>Trending Now</h3>
              <div className="suggestions-list">
                {trendingVideos.map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
