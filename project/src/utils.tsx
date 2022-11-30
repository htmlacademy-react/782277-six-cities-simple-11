import {Offer} from './types/offer';
import {SortType} from './const';

export const compareOffers: Record<SortType, (offer: Offer, nextOffer: Offer) => number> = {
  [SortType.Popular]: () => 0,
  [SortType.PriceToHigh]: (offer, nextOffer) => offer.price - nextOffer.price,
  [SortType.PriceToLow]: (offer, nextOffer) => nextOffer.price - offer.price,
  [SortType.RatingToLow]: (offer, nextOffer) => nextOffer.rating - offer.rating
};

export const getRandomPositiveInteger = (a: number, b: number) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomElement = (elements: string[]) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

export const getRandomNumberOfElements = (elements: string[], number = 6) => {
  if (elements.length <= number) {
    return;
  }

  const randomElements: string[] = [];

  while (randomElements.length < number) {
    const randomElement = getRandomElement(elements);

    if (!randomElements.includes(randomElement)) {
      randomElements.push(randomElement);
    }
  }

  return randomElements;
};

export const formatFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatDate = (date: string, locales = 'en-US'): string =>
  new Date(date).toLocaleString(locales, {month: 'long', year: 'numeric'});

export const calculateRatingWidth = (currentRating: number, maxRating = 5): string =>
  `${Math.round(currentRating) / maxRating * 100}%`;
