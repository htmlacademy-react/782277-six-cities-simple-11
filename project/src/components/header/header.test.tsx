import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Header from './header';
import {makeFakeUserData} from '../../utils/mocks';
import {AuthorizationStatus} from '../../const';

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

    const logoElement = screen.getByAltText(/Six cities logo./i);
    const avatarElement = screen.getByAltText(`${fakeState.USER.userData.name}`);
    const spanElement = screen.getByText(/Sign out/i);

    expect(logoElement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
    expect(spanElement).toBeInTheDocument();
  });
});
