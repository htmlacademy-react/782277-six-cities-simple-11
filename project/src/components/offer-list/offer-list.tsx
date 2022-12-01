import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';
import {Offers} from '../../types/offer';

type OfferListProps = {
  offers: Offers;
  isMainOffer?: boolean;
  isNearOffer?: boolean;
};

function OfferList({offers, isMainOffer, isNearOffer}: OfferListProps): JSX.Element {
  return (
    <div
      className={cn('places__list', {
        'cities__places-list': isMainOffer,
        'tabs__content': isMainOffer,
        'near-places__list': isNearOffer
      })}
    >
      {offers && offers.map((offer) => (
        <OfferCard
          key={offer.id.toString()}
          offer={offer}
          isMainOffer
        />
      ))}
    </div>
  );
}

export default OfferList;
