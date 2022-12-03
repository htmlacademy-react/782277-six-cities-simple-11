import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import {createMemoryHistory} from 'history';
import Loader from './loader';

describe('Component: Loader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Loader />
        </HistoryRouter>
      </HelmetProvider>
    );

    const blockElement = screen.getByText(/Loading.../i);
    expect(blockElement).toBeInTheDocument();
  });
});
