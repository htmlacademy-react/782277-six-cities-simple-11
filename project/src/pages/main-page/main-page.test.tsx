import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import MainPage from './main-page';
import {makeFakeUserData, makeFakeOffers} from '../../utils/mocks';
import {AppRoute, AuthorizationStatus, Location, SortType} from '../../const';

const fakeUserData = makeFakeUserData();
const fakeOffers = makeFakeOffers();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuthorized,
    userData: fakeUserData
  },
  OFFERS: {
    location: Location.Paris,
    sortType: SortType.Popular,
    offers: fakeOffers,
    selectedOffer: fakeOffers[0],
    isOffersLoading: false
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MainPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('location-list')).toBeInTheDocument();
  });

  it('should render "empty offer section" if there are not available offers', () => {
    const store = mockStore({
      ...fakeState,
      OFFERS: {
        ...fakeState.OFFERS,
        offers: []
      }
    });

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MainPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('location-list')).toBeInTheDocument();
    expect(screen.getByTestId('empty-offer-section')).toBeInTheDocument();
    expect(screen.queryByTestId('offer-section')).not.toBeInTheDocument();
    expect(screen.queryByTestId('map')).not.toBeInTheDocument();
  });
});
