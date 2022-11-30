import {State} from '../../types/state';
import {OfferId} from '../../types/offer';
import {Reducer, Location, SortType} from '../../const';

export const getLocation = (state: State): Location => state[Reducer.AppProcess].location;
export const getSortType = (state: State): SortType => state[Reducer.AppProcess].sortType;
export const getSelectedOfferId = (state: State): OfferId | null => state[Reducer.AppProcess].selectedOfferId;
