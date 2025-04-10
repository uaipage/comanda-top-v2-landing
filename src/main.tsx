
import './index.css';

// Este arquivo é usado apenas durante o desenvolvimento
// Para produção, entry-client.tsx é usado

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
