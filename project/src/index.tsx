import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {offers, nearOffers} from './mocks/offer';
import {allReviews} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      nearOffers={nearOffers}
      allReviews={allReviews}
    />
  </React.StrictMode>
);
