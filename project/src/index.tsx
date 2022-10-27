import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

enum Setting {
  cardCount = 5
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardCount={Setting.cardCount} />
  </React.StrictMode>
);
