import Sort from '../sort/sort';
import OfferList from '../offer-list/offer-list';

type OffersSectionProps = {
  countOfOffers: number;
  location: string;
};

export default function OffersSection({countOfOffers, location}: OffersSectionProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>

      <b className="places__found">
        {countOfOffers} places to stay in {location}
      </b>

      <Sort />

      <OfferList isMainOfferList />
    </section>
  );
}
