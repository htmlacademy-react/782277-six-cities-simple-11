import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import EmptyOfferSection from './empty-offer-section';
import {Location} from '../../constants';

const fakeState = {
  OFFERS: {location: Location.Paris}
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: EmptyOfferSection', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <EmptyOfferSection />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const headerElement = screen.getByText(/No places to stay available/i);
    const paragraphElement = screen.getByText(new RegExp(`We could not find any property available at the moment in ${Location.Paris}`, 'i'));

    expect(screen.getByTestId('empty-offer-section')).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
