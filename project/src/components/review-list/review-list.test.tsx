import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewList from './review-list';
import {makeFakeUserData, makeFakeOffer, makeFakeReviews} from '../../utils/mocks';
import {AuthorizationStatus} from '../../constants';

const offerId = 1;

const fakeUserData = makeFakeUserData();
const fakeOffer = makeFakeOffer();
const fakeReviews = makeFakeReviews();

const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuthorized,
    userData: fakeUserData
  },
  OFFER_PROPERTY: {
    offerProperty: fakeOffer,
    isOfferPropertyLoading: false,
    hasOfferPropertyError: false,
    reviews: fakeReviews,
    isReviewFormBlocked: false
  }
};

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewList reviews={fakeReviews} offerId={offerId} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
  });

  it('should not display "form review" if user has not status authored', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewList reviews={fakeReviews} offerId={offerId} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.queryByTestId('review-form')).not.toBeInTheDocument();
  });

  it('should display "form review" if user has status authored', () => {
    const store = mockStore({
      ...fakeState,
      USER: {
        ...fakeState.USER,
        authorizationStatus: AuthorizationStatus.Authorized,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewList reviews={fakeReviews} offerId={offerId} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-list')).toBeInTheDocument();
    expect(screen.getByTestId('review-form')).toBeInTheDocument();
  });
});
