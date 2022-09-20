import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';

const container = document.getElementById('root') as HTMLDivElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
