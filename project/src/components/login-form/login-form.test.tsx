import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import LoginForm from './login-form';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: LoginForm', () => {
  it('should render correctly', async () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HelmetProvider>
          <HistoryRouter history={history}>
            <LoginForm />
          </HistoryRouter>
        </HelmetProvider>
      </Provider>
    );

    const headerElement = screen.getAllByText(/Sign in/i);
    expect(headerElement[0]).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('password'), '123456');
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
