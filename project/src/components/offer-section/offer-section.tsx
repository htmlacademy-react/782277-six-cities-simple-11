import Sort from '../sort/sort';
import OfferList from '../offer-list/offer-list';

import {Offers} from '../../types/offer';

type OffersSectionProps = {
  location: string;
  offers: Offers;
};

export default function OfferSection({location, offers}: OffersSectionProps): JSX.Element {
  const countOfOffers = offers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>

      <b className="places__found">
        {countOfOffers} places to stay in {location}
      </b>

      <Sort />
      <OfferList offers={offers} isMainOffer />
    </section>
  );
}
