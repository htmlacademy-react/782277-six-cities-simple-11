import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';

import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

import {getOffersByLocation, compareOffers} from '../../utils';
import {AuthorizationStatus} from '../../const';


export default function MainPage(): JSX.Element {
  const location = useAppSelector((state) => state.location);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = useAppSelector((state) => getOffersByLocation(state.offers, location).sort(compareOffers[sortType]));

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

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
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>

              <b className="places__found">
                {offers.length} places to stay in {location}
              </b>

              <Sort />
              <OfferList offers={offers} isMainOffer />
            </section>

            <div className="cities__right-section">
              <Map offers={offers} isMainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
