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

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <ReviewForm offerId={offerId} />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    const headerElement = screen.getByText(/Your review/i);
    expect(headerElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const checkboxElement = screen.getByDisplayValue('1');
    await userEvent.click(screen.getByTestId('rating-1'));
    expect(checkboxElement).toBeChecked();

    await userEvent.type(screen.getByTestId('review'), 'It is a new review.');
    expect(screen.getByDisplayValue(/It is a new review./i)).toBeInTheDocument();
  });
});
