import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';
import {compareOffers} from '../../utils';
import {Reducer, Location, SortType} from '../../enum';

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
