import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {StatusCodes} from 'http-status-codes';

import {store} from '../../store/store';
import {fetchOfferItemAction, fetchReviewAction, fetchNearOffersAction} from '../../store/api-action';
import {useAppSelector} from '../../hooks/useAppSelector';

import NotFoundPage from '../not-found-page/not-found-page';
import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferProperty from '../../components/offer-property/offer-property';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';

import {AuthorizationStatus} from '../../const';


export default function OfferPage(): JSX.Element {
  const {id} = useParams();
  const offerId = Number(id);

  useEffect(() => {
    store.dispatch(fetchOfferItemAction(offerId));
    store.dispatch(fetchReviewAction(offerId));
    store.dispatch(fetchNearOffersAction(offerId));
  }, [offerId]);

  const offerItem = useAppSelector((state) => state.offerItem);
  const reviews = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearOffers);

  const errorCode = useAppSelector((state) => state.errorCode);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const shouldDisplayReviews = reviews !== null && authorizationStatus === AuthorizationStatus.Authorized;
  const shouldDisplayNearOffers = nearOffers !== null;

  if (errorCode === StatusCodes.NOT_FOUND || errorCode === StatusCodes.BAD_REQUEST) {
    return <NotFoundPage />;
  }

  if (offerItem === null) {
    return <Loader />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`Six cities: ${offerItem.title}`}</title>
      </Helmet>

      <Header>
        <UserNavigation />
      </Header>

      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery offer={offerItem} />

          <div className="property__container container">
            <div className="property__wrapper">
              <OfferProperty offer={offerItem} />
              <OfferHost offer={offerItem} />

              {shouldDisplayReviews && <ReviewList reviews={reviews} />}
            </div>
          </div>

          {shouldDisplayNearOffers && <Map offers={nearOffers} />}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>

            {shouldDisplayNearOffers && <OfferList offers={nearOffers} isNearOffer />}
          </section>
        </div>
      </main>
    </div>
  );
}
