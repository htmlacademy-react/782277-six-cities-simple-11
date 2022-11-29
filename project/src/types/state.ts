import {store} from '../store/store';
import {UserData} from './user';
import {AuthorizationStatus} from '../const';


export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};
