import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import Gallery from '../../components/gallery/gallery';
import Offer from '../../components/offer/offer';
import Review from '../../components/review/review';
import OfferCard from '../../components/offer-card/offer-card';

export default function OfferPage(): JSX.Element {
  return (
    <div className="page">
      <Header>
        <UserNavigation />
      </Header>

      <main className="page__main page__main--property">
        <section className="property">
          <Gallery />
          <div className="property__container container">
            <div className="property__wrapper">
              <Offer />
              <Review />
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {/* TODO при появлении данных, переделать на map */}
              <OfferCard />
              <OfferCard />
              <OfferCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
