import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {formatFirstLetter, calculateRatingWidth} from '../../utils';
import {AppRoute} from '../../const';

type OfferCardProps = {
  offer: Offer;
  onCardMouseEnter?: () => void;
};

export default function OfferCard({offer, onCardMouseEnter}: OfferCardProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={onCardMouseEnter}>

      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
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
