import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import Map from './map';
import {makeFakeOffers} from '../../utils/mocks';

const fakeOffers = makeFakeOffers();

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Map', () => {
  it('should render correctly main map', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Map offers={fakeOffers} selectedOffer={fakeOffers[0]} isMainMap />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const mapElement = screen.getByTestId('map');

    expect(mapElement).toBeInTheDocument();
    expect(mapElement).toHaveClass('cities__map');
    expect(mapElement).not.toHaveClass('property__map');
  });

  it('should render correctly near map', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Map offers={fakeOffers} selectedOffer={fakeOffers[0]} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const mapElement = screen.getByTestId('map');

    expect(mapElement).toBeInTheDocument();
    expect(mapElement).not.toHaveClass('cities__map');
    expect(mapElement).toHaveClass('property__map');
  });
});
