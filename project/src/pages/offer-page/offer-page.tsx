import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import {store} from '../../store/store';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {fetchNearOffersAction, fetchOfferPropertyAction, fetchReviewAction} from '../../store/offer-property-data/api-action';
import {getOfferProperty, getOfferPropertyLoadingStatus, getOfferPropertyErrorStatus, getReviews, getNearOffers} from '../../store/offer-property-data/selectors';

import NotFoundPage from '../not-found-page/not-found-page';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferProperty from '../../components/offer-property/offer-property';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import NearOfferSection from '../../components/near-offer-section/near-offer-section';

import {AuthorizationStatus} from '../../const';


function OfferPage(): JSX.Element {
  const {id} = useParams();
  const offerId = Number(id);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const shouldDisplayReviews = authorizationStatus === AuthorizationStatus.Authorized;

  useEffect(() => {
    store.dispatch(fetchOfferPropertyAction(offerId));
    store.dispatch(fetchNearOffersAction(offerId));

    if (shouldDisplayReviews) {
      store.dispatch(fetchReviewAction(offerId));
    }
  }, [offerId, shouldDisplayReviews]);

  const offerProperty = useAppSelector(getOfferProperty);
  const isOfferPropertyLoading = useAppSelector(getOfferPropertyLoadingStatus);
  const hasOfferPropertyError = useAppSelector(getOfferPropertyErrorStatus);

  const reviews = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearOffers);

  if (hasOfferPropertyError) {
    return <NotFoundPage />;
  }

  if (!offerProperty || isOfferPropertyLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`Six cities: ${offerProperty.title}`}</title>
      </Helmet>

      <Header>
        <UserNavigation />
      </Header>

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery offer={offerProperty} />

          <div className="property__container container">
            <div className="property__wrapper">
              <OfferProperty offer={offerProperty} />
              <OfferHost offer={offerProperty} />

              {shouldDisplayReviews && <ReviewList offerId={offerId} reviews={reviews} />}
            </div>
          </div>

          {nearOffers && <Map offers={nearOffers} />}
        </section>

        {nearOffers && <NearOfferSection offers={nearOffers} />}
      </main>
    </div>
  );
}

export default OfferPage;
