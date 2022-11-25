import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';

import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import LocationList from '../../components/location-list/location-list';
import OfferSection from '../../components/offer-section/offer-section';
import Map from '../../components/map/map';

import {getOffersByLocation, compareOffers} from '../../utils';

export default function MainPage(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const location = useAppSelector((state) => state.location);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = useAppSelector((state) => getOffersByLocation(state.offers, location).sort(compareOffers[sortType]));

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{`Six cities /${location}/`}</title>
      </Helmet>

      <Header>
        <UserNavigation />
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationList />

        <div className="cities">
          <div className="cities__places-container container">
            {(isOffersDataLoading && offers)
              ? <Loader />
              : <OfferSection location={location} offers={offers} />}

            <div className="cities__right-section">
              <Map offers={offers} isMainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
