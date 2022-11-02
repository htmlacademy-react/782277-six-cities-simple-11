import {useState} from 'react';
import OfferCard from '../offer-card/offer-card';
import {Offers} from '../../types/offer';

type OfferListProps = {
  offers: Offers;
};

export default function OfferList({offers}: OfferListProps): JSX.Element {
  const [, setActiveCard] = useState<number>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers && offers.map((offer) => (
        <OfferCard
          key={offer.id.toString()}
          offer={offer}
          onCardHover={setActiveCard}
        />
      ))}
    </div>
  );
}
