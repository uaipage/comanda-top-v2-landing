
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import "./i18n";

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter basename="/comanda-top-v2-landing/">
      <App />
    </BrowserRouter>
  );
}
