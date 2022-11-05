import {Link} from 'react-router-dom';
import cn from 'classnames';

import {Offer} from '../../types/offer';
import {formatFirstLetter, calculateRatingWidth} from '../../utils';
import {AppRoute} from '../../const';

type OfferCardProps = {
  offer: Offer;
  onListItemHover: (offerId: number | null) => void;
  isMainOfferList?: boolean;
};

export default function OfferCard({offer, onListItemHover, isMainOfferList}: OfferCardProps): JSX.Element {
  return (
    <article
      className={cn('place-card', {
        'cities__card': isMainOfferList,
        'near-places__card': !isMainOfferList
      })}
      onMouseEnter={() => onListItemHover(offer.id)}
      onMouseLeave={() => onListItemHover(null)}
    >

      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div
        className={cn('place-card__image-wrapper', {
          'cities__image-wrapper': isMainOfferList,
          'near-places__image-wrapper': !isMainOfferList
        })}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calculateRatingWidth(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{formatFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}
