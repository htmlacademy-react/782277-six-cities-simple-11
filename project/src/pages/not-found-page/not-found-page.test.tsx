import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import {createMemoryHistory} from 'history';
import NotFoundPage from './not-found-page';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <NotFoundPage />
        </HistoryRouter>
      </HelmetProvider>
    );

    const headerElement = screen.getByText(/404. Page not found/i);
    const linkElement = screen.getByText(/Вернуться на главную/i);

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
