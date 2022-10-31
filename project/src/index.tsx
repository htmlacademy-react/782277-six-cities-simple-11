import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {offers} from './mocks/offer';
import {allReviews} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      allReviews={allReviews}
    />
  </React.StrictMode>
);
