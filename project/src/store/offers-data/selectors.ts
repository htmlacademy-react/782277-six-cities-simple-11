import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {Offers, OfferId} from '../../types/offer';
import {compareOffers} from '../../utils';
import {Reducer, Location, SortType} from '../../const';

export const getLocation = (state: State): Location => state[Reducer.Offers].location;
export const getSortType = (state: State): SortType => state[Reducer.Offers].sortType;
export const getSelectedOfferId = (state: State): OfferId | null => state[Reducer.Offers].selectedOfferId;

export const getOffersData = (state: State): Offers => state[Reducer.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[Reducer.Offers].isOffersLoading;

export const getSelectedOffers = createSelector(
  [getLocation, getSortType, getOffersData],
  (location, sort, offers) => offers
    .filter((offer) => offer.city.name === location)
    .sort(compareOffers[sort])
);
