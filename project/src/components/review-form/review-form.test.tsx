import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewForm from './review-form';

const offerId = 1;

const fakeState = {
  OFFER_PROPERTY: {
    isReviewFormBlocked: false
  }
};

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: ReviewForm', () => {
  it('should render correctly', async () => {
    const store = mockStore(fakeState);
    const numberOfStars = 5;

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <ReviewForm offerId={offerId} />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    const labelElement = screen.getByLabelText(/Your review/i);
    expect(labelElement).toBeInTheDocument();

    const radioElements = screen.getAllByTestId('rating');
    expect(radioElements.length).toBe(numberOfStars);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const radioElement = screen.getByDisplayValue('1');
    await userEvent.click(radioElement);
    expect(radioElement).toBeChecked();

    await userEvent.type(screen.getByTestId('review'), 'It is a new review.');
    expect(screen.getByDisplayValue(/It is a new review./i)).toBeInTheDocument();
  });

  it('should button has disabled status if radio button is not checked', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <ReviewForm offerId={offerId} />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    const radioElements = screen.getAllByTestId('rating');

    radioElements.forEach((item: HTMLElement) => {
      expect(item).not.toBeChecked();
    });
  });

  it('should button has disabled status if length of review less than 50 letters', async () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <ReviewForm offerId={offerId} />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('review'), 'Review has less 50 letters.');
    expect(screen.getByDisplayValue(/Review has less 50 letters./i)).toBeInTheDocument();

    expect(buttonElement).toHaveAttribute('disabled');
  });

  it('should button has disabled status if form status is disabled', () => {
    const store = mockStore({
      OFFER_PROPERTY: {isReviewFormBlocked: true}
    });

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <ReviewForm offerId={offerId} />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('disabled');
  });
});
