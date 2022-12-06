import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Sort from './sort';
import {makeFakeUserData, makeFakeOffers, makeFakeOffer} from '../../utils/mocks';
import {AuthorizationStatus, Location, SortType} from '../../constants';

const fakeUserData = makeFakeUserData();
const fakeOffers = makeFakeOffers();
const fakeOffer = makeFakeOffer();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuthorized,
    userData: fakeUserData
  },
  OFFERS: {
    location: Location.Paris,
    sortType: SortType.Popular,
    offers: fakeOffers,
    selectedOffer: fakeOffer,
    isOffersLoading: false
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Sort', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Sort sortType={fakeState.OFFERS.sortType} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });

  it('should dispatch action "changeSort" if user click to sort item', async () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Sort sortType={fakeState.OFFERS.sortType} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const sortItemElements = screen.getAllByTestId('sort-item');
    await userEvent.click(sortItemElements[0]);

    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/changeSort');
  });
});
