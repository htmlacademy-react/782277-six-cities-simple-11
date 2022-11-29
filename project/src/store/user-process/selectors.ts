import {State} from '../../types/state';
import {Reducer, AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Reducer.User].authorizationStatus;
