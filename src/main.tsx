import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from './config/client.ts';
import './index.css';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)
