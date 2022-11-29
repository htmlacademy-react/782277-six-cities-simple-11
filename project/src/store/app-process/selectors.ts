import {State} from '../../types/state';
import {OfferId} from '../../types/offer';
import {Reducer} from '../../const';

export const getLocation = (state: State): string => state[Reducer.AppProcess].location;
export const getSortType = (state: State): string => state[Reducer.AppProcess].sortType;
export const getSelectedOfferId = (state: State): OfferId | null => state[Reducer.AppProcess].selectedOfferId;
