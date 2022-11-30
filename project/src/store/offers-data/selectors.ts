import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';
import {Reducer, Location, SortType} from '../../enum';

const compareOffers: Record<SortType, (offer: Offer, nextOffer: Offer) => number> = {
  [SortType.Popular]: () => 0,
  [SortType.PriceToHigh]: (offer, nextOffer) => offer.price - nextOffer.price,
  [SortType.PriceToLow]: (offer, nextOffer) => nextOffer.price - offer.price,
  [SortType.RatingToLow]: (offer, nextOffer) => nextOffer.rating - offer.rating
};

export const getLocation = (state: State): Location => state[Reducer.Offers].location;
export const getSortType = (state: State): SortType => state[Reducer.Offers].sortType;
export const getSelectedOffer = (state: State): Offer | null => state[Reducer.Offers].selectedOffer;

export const getOffersData = (state: State): Offers => state[Reducer.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[Reducer.Offers].isOffersLoading;

export const getSelectedOffers = createSelector(
  [getLocation, getSortType, getOffersData],
  (location, sort, offers) => offers
    .filter((offer) => offer.city.name === location)
    .sort(compareOffers[sort])
);
