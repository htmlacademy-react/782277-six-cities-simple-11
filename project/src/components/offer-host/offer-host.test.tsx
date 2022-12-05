import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import OfferHost from './offer-host';
import {makeFakeOffer} from '../../utils/mocks';

const fakeOffer = makeFakeOffer();

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: OfferHost', () => {
  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferHost offer={fakeOffer} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('offer-host')).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  });

  it('should render correctly "pro" label', () => {
    const store = mockStore();

    const offerWithProLabel = {
      ...fakeOffer,
      host: {...fakeOffer.host, isPro: true}
    };

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferHost offer={offerWithProLabel} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Pro/i)).toBeInTheDocument();
  });
});
