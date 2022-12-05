import {Helmet} from 'react-helmet-async';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {
  getLocation,
  getSortType,
  getSelectedOffer,
  getOffersData,
  getOffersLoadingStatus
} from '../../store/offers-data/selectors';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import OfferSection from '../../components/offer-section/offer-section';
import EmptyOfferSection from '../../components/empty-offer-section/empty-offer-section';
import Map from '../../components/map/map';
import {AuthorizationStatus} from '../../const';

function MainPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const location = useAppSelector(getLocation);
  const sortType = useAppSelector(getSortType);
  const offers = useAppSelector(getOffersData);

  const isOffersLoading = useAppSelector(getOffersLoadingStatus);
  const selectedOffer = useAppSelector(getSelectedOffer);

  if (isOffersLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main" data-testid="main-page">
      <Helmet>
        <title>{`Six cities /${location}/`}</title>
      </Helmet>

      <Header withNavigation />

      <main className={cn('page__main page__main--index', {'page__main--index-empty': !offers.length})}>
        <h1 className="visually-hidden">Cities</h1>

        <LocationList />

        <div className="cities">
          <div className={cn('cities__places-container container', {'cities__places-container--empty': !offers.length})}>

            {offers.length
              ? <OfferSection location={location} sortType={sortType} offers={offers} />
              : <EmptyOfferSection />}

            <div className="cities__right-section">
              {offers.length && <Map offers={offers} selectedOffer={selectedOffer} isMainMap />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
