import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {getLocation, getSortType, getSelectedOfferId} from '../../store/app-process/selectors';
import {getOffersData, getOffersLoadingStatus} from '../../store/offers-data/selectors';

import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import LocationList from '../../components/location-list/location-list';
import Sort from '../../components/sort/sort';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

import {compareOffers} from '../../utils';
import {AuthorizationStatus} from '../../const';


function MainPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const location = useAppSelector(getLocation);
  const sortType = useAppSelector(getSortType);
  const offers = useAppSelector(getOffersData)
    .filter((offer) => offer.city.name === location)
    .sort(compareOffers[sortType]);

  const isOffersLoading = useAppSelector(getOffersLoadingStatus);
  const selectedOfferId = useAppSelector(getSelectedOfferId);

  if (isOffersLoading || authorizationStatus === AuthorizationStatus.Unknown) {
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

              <Sort sortType={sortType} />
              <OfferList offers={offers} isMainOffer />
            </section>

            <div className="cities__right-section">
              <Map offers={offers} selectedOfferId={selectedOfferId} isMainMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
