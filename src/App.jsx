import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import AppRoutes from './routes/AppRoutes';
import LoadingScreen from './components/common/LoadingScreen';
import './styles/variables.css';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
