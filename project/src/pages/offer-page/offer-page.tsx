// import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
// import OfferGallery from '../../components/offer-gallery/offer-gallery';
// import OfferProperty from '../../components/offer-property/offer-property';
// import OfferHost from '../../components/offer-host/offer-host';
// import ReviewList from '../../components/review-list/review-list';
// import Map from '../../components/map/map';
// import OfferList from '../../components/offer-list/offer-list';

// import {Offers, Offer} from '../../types/offer';
// import {AllReviews} from '../../types/review';

export default function OfferPage(): JSX.Element {
  // const {id} = useParams();
  // const offer = offers.find((item) => item.id === Number(id)) as Offer;
  // const reviews = allReviews[Number(id)];

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
          {/* <OfferGallery offer={offer} /> */}

          <div className="property__container container">
            <div className="property__wrapper">
              {/* <OfferProperty offer={offer} /> */}
              {/* <OfferHost offer={offer} /> */}
              {/* <ReviewList reviews={reviews} /> */}
            </div>
          </div>

          {/* <Map /> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>

            {/* <OfferList /> */}
          </section>
        </div>
      </main>
    </div>
  );
}
