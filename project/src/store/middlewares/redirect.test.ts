import {AnyAction} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {redirect} from './redirect';
import {redirectToRoute} from '../action';
import {State} from '../../types/state';
import {AppRoute} from '../../constants';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../services/browser-history', () => fakeHistory);

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api), redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Login);
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.Login)
    ]);
  });

  it('should not to be redirect /* because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.NotFound});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.NotFound);
  });
});
