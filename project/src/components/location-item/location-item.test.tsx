import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import LocationItem from './location-item';
import {Location} from '../../const';

const fakeState = {
  OFFERS: {location: Location.Paris}
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: LocationItem', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);
    const fakeLocationItem = Location.Brussels;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LocationItem location={fakeLocationItem} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('locations-item')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(fakeLocationItem)).toBeInTheDocument();
  });

  it('should render with active item class', () => {
    const store = mockStore(fakeState);
    const fakeLocationItem = Location.Paris;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LocationItem location={fakeLocationItem} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(fakeLocationItem)).toBeInTheDocument();
    expect(screen.getByRole('link').classList.contains('tabs__item--active')).toBe(true);
  });

  it('should dispatch action if user click on the link', async () => {
    const store = mockStore(fakeState);
    const fakeLocationItem = Location.Brussels;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LocationItem location={fakeLocationItem} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByRole('link'));

    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/changeLocation');
  });
});
