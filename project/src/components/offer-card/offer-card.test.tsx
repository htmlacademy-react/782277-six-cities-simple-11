import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import OfferCard from './offer-card';
import {makeFakeOffers} from '../../utils/mocks';
import {Location, SortType} from '../../const';

const fakeOffers = makeFakeOffers();

const fakeState = {
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

describe('Component: OfferCard', () => {
  it('should render correctly main card offer', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferCard offer={fakeOffers[0]} isMainOffer />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const articleElement = screen.getByTestId('offer-card');

    expect(articleElement).toBeInTheDocument();
    expect(articleElement.classList.contains('cities__card')).toBe(true);
    expect(articleElement.classList.contains('near-places__card')).toBe(false);
    expect(screen.getByText(fakeOffers[0].title)).toBeInTheDocument();
  });

  it('should render correctly near card offer', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferCard offer={fakeOffers[0]} isNearOffer />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const articleElement = screen.getByTestId('offer-card');

    expect(articleElement).toBeInTheDocument();
    expect(articleElement.classList.contains('cities__card')).toBe(false);
    expect(articleElement.classList.contains('near-places__card')).toBe(true);
    expect(screen.getByText(fakeOffers[0].title)).toBeInTheDocument();
  });

  it('should render correctly premium label', () => {
    const store = mockStore(fakeState);

    const offerWithPremiumLabel = {
      ...fakeOffers[0],
      isPremium: true
    };

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferCard offer={offerWithPremiumLabel} isMainOffer />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });


  it('should dispatch action if user hover on the card', async () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferCard offer={fakeOffers[0]} isMainOffer />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.hover(screen.getByTestId('offer-card'));

    const actions = store.getActions();
    expect(actions[0].type).toBe('OFFERS/selectOffer');
  });
});
