import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import {Offers} from '../../types/offer';
import {Reviews} from '../../types/review';

import {AppRoute} from '../../const';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
};

export default function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
