import {Offers, Offer} from './types/offer';
import {SORTS} from './const';

const [popular, lowPrice, hightPrice, rating] = SORTS;

export const compareOffers: Record<string, (offer: Offer, nextOffer: Offer) => number> = {
  [popular]: () => 0,
  [lowPrice]: (offer, nextOffer) => offer.price - nextOffer.price,
  [hightPrice]: (offer, nextOffer) => nextOffer.price - offer.price,
  [rating]: (offer, nextOffer) => nextOffer.rating - offer.rating
};

export const getOffersByLocation = (offers: Offers, location: string): Offers =>
  offers.filter((offer) => offer.city.name === location);

export const formatFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatDate = (date: string, locales = 'en-US'): string =>
  new Date(date).toLocaleString(locales, {month: 'long', year: 'numeric'});

export const calculateRatingWidth = (currentRating: number, maxRating = 5): string =>
  `${currentRating / maxRating * 100}%`;
