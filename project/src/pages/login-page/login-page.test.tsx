import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import LoginPage from './login-page';
import {makeFakeUserData} from '../../utils/mocks';
import {AppRoute, AuthorizationStatus, Location} from '../../constants';

const fakeUserData = makeFakeUserData();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuthorized,
    userData: fakeUserData
  },
  OFFERS: {
    location: Location.Paris
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('should redirect to "main-page" if user click to the "location" link', async () => {
    const store = mockStore(fakeState);
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={AppRoute.Login}
                element={<LoginPage />}
              />
              <Route
                path={AppRoute.Main}
                element={<h1>Main page.</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('locations-link'));
    expect(screen.getByText(/Main page./i)).toBeInTheDocument();
  });

  it('should dispatch action "changeLocation" if user click to the "location" link', async () => {
    const store = mockStore(fakeState);
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('locations-link'));

    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/changeLocation');
  });

  it('should redirect to "main-page" if user status is authorized', () => {
    const store = mockStore({
      ...fakeState,
      USER: {
        ...fakeState.USER.userData,
        authorizationStatus: AuthorizationStatus.Authorized
      }
    });

    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={AppRoute.Login}
                element={<LoginPage />}
              />
              <Route
                path={AppRoute.Main}
                element={<h1>Main page.</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Main page./i)).toBeInTheDocument();
  });
});
