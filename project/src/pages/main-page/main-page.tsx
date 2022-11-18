import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';

import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

export default function MainPage(): JSX.Element {
  const currentLocation = useAppSelector((state) => state.location);
  const numberOfOffers = useAppSelector((state) => state.offers).length;

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

        <div className="tabs">
          <LocationList />
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">
                {numberOfOffers
                  ? `${numberOfOffers} places to stay in ${currentLocation}`
                  : 'There aren`t available offers'}
              </b>

              <Sort />

              <OfferList isMainOfferList />
            </section>
            <div className="cities__right-section">
              <Map isMainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
