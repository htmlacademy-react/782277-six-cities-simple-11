import {useAppSelector} from '../../hooks/useAppSelector';
import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  isMainOfferList?: boolean;
};

export default function OfferList({isMainOfferList}: OfferListProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

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
