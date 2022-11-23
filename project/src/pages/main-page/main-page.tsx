import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';

import {store} from '../../store/store';
import {fetchOfferAction} from '../../store/api-action';

import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import LocationList from '../../components/location-list/location-list';
import Loader from '../../components/loader/loader';
import OffersSection from '../../components/offers-section/offers-section';
import Map from '../../components/map/map';

import {getOffersByLocation} from '../../utils';

export default function MainPage(): JSX.Element {
  const location = useAppSelector((state) => state.location);
  const offers = useAppSelector((state) => getOffersByLocation(state.offers, location));
  const countOfOffers = offers.length;

  useEffect(() => {
    store.dispatch(fetchOfferAction());
  }, []);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>

      <Header>
        <UserNavigation />
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationList />

        <div className="cities">
          <div className="cities__places-container container">
            {
              !countOfOffers
                ? <Loader />
                : <OffersSection location={location} countOfOffers={countOfOffers} />
            }

            <div className="cities__right-section">
              <Map isMainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
