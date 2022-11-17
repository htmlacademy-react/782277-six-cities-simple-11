import {Offers} from './types/offer';
import {offers} from './mocks/offer';
import {SORTS} from './const';

export const formatFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatDate = (date: string, locales = 'en-US'): string =>
  new Date(date).toLocaleString(locales, {month: 'long', year: 'numeric'});

export const calculateRatingWidth = (rating: number, maxRating = 5): string =>
  `${rating / maxRating * 100}%`;

export const getOffersByLocation = (location: string) =>
  offers.filter((offer) => offer.city.name === location);

export const getOffersBySort = (location: string, sortType: string, offersByLocation: Offers) => {
  const [popular, lowPrice, hightPrice, rating] = SORTS;

  switch (sortType) {
    case popular:
      return getOffersByLocation(location);
    case lowPrice:
      return offersByLocation.sort((offer, nextOffer) => offer.price - nextOffer.price);
    case hightPrice:
      return offersByLocation.sort((offer, nextOffer) => nextOffer.price - offer.price);
    case rating:
      return offersByLocation.sort((offer, nextOffer) => nextOffer.rating - offer.rating);
    default:
      return offersByLocation;
  }
};
