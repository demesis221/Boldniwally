# Younime.TV
### Your Anime Streaming Platform

A modern anime streaming & upload platform frontend built with React + Vite, featuring a sleek dark mode design with glassmorphism effects.

## 🚀 Features

- **Home Page** - Video grid with category filters (Anime, Movies, Shorts, Trending)
- **Watch Page** - Responsive video player with suggested videos
- **Upload Page** - Video upload form with thumbnail support
- **Authentication** - Login/Register pages (Supabase-ready)
- **User Profile** - Channel page with uploaded videos
- **Dark/Light Mode** - Modern glassmorphism design with theme toggle
- **Hero Carousel** - Auto-sliding featured anime showcase
- **Fully Responsive** - Mobile, tablet, and desktop optimized

## 🛠️ Tech Stack

- React 19
- React Router DOM
- Vite
- Axios
- CSS Modules
- Modern ES6+ JavaScript

## 📁 Project Structure

```
src/
├── assets/          # Images and icons
├── components/
│   ├── common/      # Reusable components (Navbar, Footer, VideoCard, Loader)
│   └── layout/      # Layout components (MainLayout)
├── pages/
│   ├── Home/        # Home page with video grid
│   ├── Watch/       # Video watch page
│   ├── Upload/      # Video upload page
│   ├── Auth/        # Login & Register pages
│   └── Profile/     # User profile page
├── routes/          # React Router configuration
├── services/        # API and Supabase config
├── hooks/           # Custom React hooks (useAuth)
├── styles/          # Global styles and variables
└── utils/           # Utility functions
```

## 🚦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🔮 Future Integration

This frontend is ready for integration with:
- **Supabase** - Authentication and storage
- **Node.js API** - Backend services
- **Video Player** - Replace placeholder with actual video player (Video.js, Plyr, etc.)

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎨 Design Features

- Dark mode by default
- Smooth hover effects and transitions
- Mobile-first responsive design
- Clean and modern UI
- Consistent color scheme and spacing

## 📄 License

Younime.TV © 2024 - Your Anime Streaming Platform
