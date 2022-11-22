import cn from 'classnames';

import OfferCard from '../offer-card/offer-card';

import {useAppSelector} from '../../hooks/useAppSelector';
import {getOffersByLocation, compareOffers} from '../../utils';

type OfferListProps = {
  isMainOfferList?: boolean;
};

export default function OfferList({isMainOfferList}: OfferListProps): JSX.Element {
  const location = useAppSelector((state) => state.location);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = useAppSelector((state) => getOffersByLocation(state.offers, location).sort(compareOffers[sortType]));

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
