
import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'
import App from './App.tsx'
import './index.css'
import { initScrollAnimations } from './utils/scrollAnimations'

function AppWithAnimations() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(<AppWithAnimations />);
