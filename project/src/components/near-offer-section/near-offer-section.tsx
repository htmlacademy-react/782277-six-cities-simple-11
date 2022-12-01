import OfferList from '../offer-list/offer-list';
import {Offers} from '../../types/offer';

type NearOfferSectionProps = {
  offers: Offers;
};

function NearOfferSection({offers}: NearOfferSectionProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighborhood</h2>

        <OfferList offers={offers} isNearOffer />
      </section>
    </div>
  );
}

export default NearOfferSection;
