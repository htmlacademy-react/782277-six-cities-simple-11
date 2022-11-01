import {useState} from 'react';
import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offers;
};

export default function OfferList({offers}: OfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content" data-active-card={activeCard}>
      {offers && offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onCardMouseEnter={() => setActiveCard(offer.id)}
        />
      ))}
    </div>
  );
}
