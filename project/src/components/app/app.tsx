import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import {checkAuthorizationAction, fetchOfferAction} from '../../store/api-action';
import {useAppDispatch} from '../../hooks/useAppDispatch';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
// import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import {AppRoute} from '../../const';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorizationAction());
    dispatch(fetchOfferAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          {/* <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage
                offers={offers}
                nearOffers={nearOffers}
                allReviews={allReviews}
              />
            }
          /> */}
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
