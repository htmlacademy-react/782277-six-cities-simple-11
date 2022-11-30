import {State} from '../../types/state';
import {UserData} from '../../types/user';
import {Reducer, AuthorizationStatus} from '../../enum';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Reducer.User].authorizationStatus;
export const getUserData = (state: State): UserData => state[Reducer.User].userData;
