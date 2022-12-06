import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchNearOffersAction, fetchOfferPropertyAction, fetchReviewAction} from '../../store/offer-property-data/api-actions';
import {
  getOfferProperty,
  checkOfferPropertyLoadingStatus,
  checkOfferPropertyErrorStatus,
  getSelectedReviews,
  getNearOffers
} from '../../store/offer-property-data/selectors';
import NotFoundPage from '../not-found-page/not-found-page';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferProperty from '../../components/offer-property/offer-property';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import NearOfferSection from '../../components/near-offer-section/near-offer-section';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const offerId = Number(id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchOfferPropertyAction(offerId));
      dispatch(fetchReviewAction(offerId));
      dispatch(fetchNearOffersAction(offerId));
    }

    return () => {
      isMounted = false;
    };
  }, [offerId, dispatch]);

  const offerProperty = useAppSelector(getOfferProperty);
  const isOfferPropertyLoading = useAppSelector(checkOfferPropertyLoadingStatus);
  const hasOfferPropertyError = useAppSelector(checkOfferPropertyErrorStatus);

  const reviews = useAppSelector(getSelectedReviews);
  const nearOffers = useAppSelector(getNearOffers);

  if (hasOfferPropertyError) {
    return <NotFoundPage />;
  }

  if (!offerProperty || isOfferPropertyLoading) {
    return <Loader />;
  }

  return (
    <div className="page" data-testid="offer-page">
      <Helmet>
        <title>{`Six cities: ${offerProperty.title}`}</title>
      </Helmet>

      <Header withNavigation />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery offer={offerProperty} />

          <div className="property__container container">
            <div className="property__wrapper">
              <OfferProperty offer={offerProperty} />
              <OfferHost offer={offerProperty} />

              <ReviewList offerId={offerId} reviews={reviews} />
            </div>
          </div>

          {nearOffers && <Map offers={nearOffers} selectedOffer={offerProperty} />}
        </section>

        {nearOffers && <NearOfferSection offers={nearOffers} />}
      </main>
    </div>
  );
}

export default OfferPage;
