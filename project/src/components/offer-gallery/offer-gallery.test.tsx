import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import OfferGallery from './offer-gallery';
import {makeFakeOffer} from '../../utils/mocks';

const MAX_NUMBER_OF_IMAGES = 6;

const fakeOffer = makeFakeOffer();

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferGallery offer={fakeOffer} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('offer-gallery')).toBeInTheDocument();
  });

  it('should render correctly number of images', () => {
    const store = mockStore();

    const offerWithIncorrectNumberOfImages = {
      ...fakeOffer,
      images: Array.from({length: 10}, () => `url-${Math.random()}`)
    };

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <OfferGallery offer={offerWithIncorrectNumberOfImages} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(MAX_NUMBER_OF_IMAGES);
  });
});
