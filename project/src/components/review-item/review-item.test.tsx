import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewItem from './review-item';
import {makeFakeReviews} from '../../utils/mocks';

const fakeReviews = makeFakeReviews();

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewItem review={fakeReviews[0]} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-item')).toBeInTheDocument();
  });
});
