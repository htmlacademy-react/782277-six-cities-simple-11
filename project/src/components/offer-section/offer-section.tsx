import Sort from '../../components/sort/sort';
import OfferList from '../../components/offer-list/offer-list';

import {Offers} from '../../types/offer';
import {Location, SortType} from '../../const';


type OfferSectionProps = {
  location: Location;
  sortType: SortType;
  offers: Offers;
}

function OfferSection({location, sortType, offers}: OfferSectionProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>

      <b className="places__found">
        {offers.length} places to stay in {location}
      </b>

      <Sort sortType={sortType} />
      <OfferList offers={offers} isMainOffer />
    </section>
  );
}

export default OfferSection;
