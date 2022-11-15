import cn from 'classnames';

import OfferCard from '../offer-card/offer-card';
import {Offers} from '../../types/offer';

type OfferListProps = {
  offers: Offers;
  isMainOfferList?: boolean;
};

export default function OfferList({offers, isMainOfferList}: OfferListProps): JSX.Element {
  return (
    <div
      className={cn('places__list', {
        'cities__places-list': isMainOfferList,
        'tabs__content': isMainOfferList,
        'near-places__list': !isMainOfferList
      })}
    >
      {offers && offers.map((offer) => (
        <OfferCard
          key={offer.id.toString()}
          offer={offer}
          isMainOfferList={isMainOfferList}
        />
      ))}
    </div>
  );
}
