import {State} from '../../types/state';
import {Reducer, Location, SortType} from '../../const';
import {Offers, OfferId} from '../../types/offer';

export const getLocation = (state: State): Location => state[Reducer.Offers].location;
export const getSortType = (state: State): SortType => state[Reducer.Offers].sortType;
export const getSelectedOfferId = (state: State): OfferId | null => state[Reducer.Offers].selectedOfferId;

export const getOffersData = (state: State): Offers => state[Reducer.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[Reducer.Offers].isOffersLoading;
