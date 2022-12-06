import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Header from './header';
import {makeFakeUserData} from '../../utils/mocks';
import {AppRoute, AuthorizationStatus} from '../../constants';

const fakeUserData = makeFakeUserData();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.Authorized,
    userData: fakeUserData
  }
};

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: Header', () => {
  it('should render correctly without user navigation', () => {
    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();

    const imageElement = screen.getByAltText(/Six cities logo./i);
    expect(imageElement).toBeInTheDocument();
  });

  it('should render correctly with user navigation and status authorized', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <Header withNavigation />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();

    const logoElement = screen.getByAltText(/Six cities logo./i);
    expect(logoElement).toBeInTheDocument();

    const avatarElement = screen.getByAltText(`${fakeState.USER.userData.name}`);
    expect(avatarElement).toBeInTheDocument();

    const spanElement = screen.getByText(/Sign out/i);
    expect(spanElement).toBeInTheDocument();
  });

  it('should render correctly with user navigation and status unauthorized', () => {
    const store = mockStore({
      ...fakeState,
      USER: {
        ...fakeState.USER.userData,
        authorizationStatus: AuthorizationStatus.NoAuthorized
      }
    });

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <Header withNavigation />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();

    const logoElement = screen.getByAltText(/Six cities logo./i);
    expect(logoElement).toBeInTheDocument();

    const spanElement = screen.getByText(/Sign in/i);
    expect(spanElement).toBeInTheDocument();
  });

  it('should redirect to "main-page" if user click to the link with logo', async () => {
    const store = mockStore(fakeState);
    history.push('/header');

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <Routes>
              <Route
                path='/header'
                element={<Header withNavigation />}
              />
              <Route
                path={AppRoute.Main}
                element={<h1>Main page.</h1>}
              />
            </Routes>
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('logo-link'));
    expect(screen.getByText(/Main page./i)).toBeInTheDocument();
  });
});
