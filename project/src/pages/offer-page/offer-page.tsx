import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import {store} from '../../store/store';
import {fetchOfferItemAction, fetchReviewAction, fetchNearOffersAction} from '../../store/api-action';
import {useAppSelector} from '../../hooks/useAppSelector';

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


export default function OfferPage(): JSX.Element {
  const {id} = useParams();
  const offerId = Number(id);

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const shouldDisplayReviews = authorizationStatus === AuthorizationStatus.Authorized;

  useEffect(() => {
    store.dispatch(fetchOfferItemAction(offerId));
    store.dispatch(fetchNearOffersAction(offerId));

    if (shouldDisplayReviews) {
      store.dispatch(fetchReviewAction(offerId));
    }
  }, [offerId, shouldDisplayReviews]);

  const offerItem = useAppSelector((state) => state.offerItem);
  const reviews = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (!offerItem || isDataLoading) {
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
