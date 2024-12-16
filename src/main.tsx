import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@/app/context/theme-provider/theme-provider.tsx';

import { App } from './app/App.tsx';

import './app/index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <App />
  </ThemeProvider>
);
