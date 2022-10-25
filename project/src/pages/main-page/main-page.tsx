import Header from '../../components/header/header';
import UserNavigation from '../../components/user-navigation/user-navigation';
import LocationNavigation from '../../components/location-navigation/location-navigation';
import Sort from '../../components/sort/sort';
import OfferCard from '../../components/offer-card/offer-card';

type MainPageProps = {
  cardCount: number;
}

export default function MainPage({cardCount}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header>
        <UserNavigation />
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationNavigation />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cardCount} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                {/* TODO при появлении данных, переделать на map */}
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
