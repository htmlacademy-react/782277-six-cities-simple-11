import {userData} from './user-data';
import {checkAuthorizationAction, loginAction, logoutAction} from './api-actions';
import {UserDataState} from '../../types/state';
import {UserData} from '../../types/user';
import {makeFakeUserData} from '../../utils/mocks';
import {AuthorizationStatus} from '../../constants';

const fakeUserData = makeFakeUserData();

describe('Reducer: userData', () => {
  let state: UserDataState;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {} as UserData
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: checkAuthorizationAction', () => {
    it('should update authorizationStatus to "AUTHORIZED" and return "userData" if action fulfilled', () => {
      expect(userData.reducer(state, {type: checkAuthorizationAction.fulfilled.type, payload: fakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Authorized, userData: fakeUserData});
    });

    it('should update authorizationStatus to "NO_AUTHORIZED" if action rejected', () => {
      expect(userData.reducer(state, {type: checkAuthorizationAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuthorized, userData: {}});
    });
  });

  describe('Action: loginAction', () => {
    it('should update authorizationStatus to "AUTHORIZED" and return "userData" if action fulfilled', () => {
      expect(userData.reducer(state, {type: loginAction.fulfilled.type, payload: fakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Authorized, userData: fakeUserData});
    });
    it('should update authorizationStatus to "NO_AUTHORIZED" if action rejected', () => {
      expect(userData.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuthorized, userData: {}});
    });
  });

  describe('Action: logoutAction', () => {
    it('should update authorizationStatus to "NO_AUTHORIZED" if action fulfilled', () => {
      expect(userData.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuthorized, userData: {}});
    });
  });
});
