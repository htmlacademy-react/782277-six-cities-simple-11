import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './store/store';
import {fetchOfferAction} from './store/api-action';

import App from './components/app/app';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
