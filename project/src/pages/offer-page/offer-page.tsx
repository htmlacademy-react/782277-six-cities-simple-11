import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferProperty from '../../components/offer-property/offer-property';
import OfferHost from '../../components/offer-host/offer-host';
import ReviewList from '../../components/review-list/review-list';
import OfferCard from '../../components/offer-card/offer-card';

import {Offers, Offer} from '../../types/offer';
import {AllReviews} from '../../types/review';

type OfferPageProps = {
  offers: Offers;
  nearOffers: Offers;
  allReviews: AllReviews;
};

export default function OfferPage({offers, nearOffers, allReviews}: OfferPageProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  const {id} = useParams();
  const offer = offers.find((item) => item.id === Number(id)) as Offer;
  const reviews = allReviews[Number(id)];

  return (
    <div className="page">
      <Helmet>
        <title>Six cities: offer</title>
      </Helmet>

      <Header>
        <UserNavigation />
      </Header>

      <main className="page__main page__main--property">
        <section className="property">

          <OfferGallery offer={offer} />

          <div className="property__container container">
            <div className="property__wrapper">
              <OfferProperty offer={offer} />
              <OfferHost offer={offer} />
              <ReviewList reviews={reviews} />
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {nearOffers && nearOffers.map((item) => (
                <OfferCard
                  key={item.id}
                  offer={item}
                  onListItemHover={setActiveCardId}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
