import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import {createMemoryHistory} from 'history';
import EmptyOfferSection from './empty-offer-section';

describe('Component: EmptyOfferSection', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <EmptyOfferSection />
        </HistoryRouter>
      </HelmetProvider>
    );

    const headerElement = screen.getByText(/No places to stay available/i);
    const paragraphElement = screen.getByText(/We could not find any property available at the moment in Dusseldorf/i);

    expect(screen.getByTestId('empty-offer-section')).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
