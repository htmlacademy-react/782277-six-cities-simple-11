import {State} from '../../types/state';
import {Reducer} from '../../const';
import {Offers} from '../../types/offer';

export const getOffersData = (state: State): Offers => state[Reducer.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[Reducer.Offers].isOffersLoading;
