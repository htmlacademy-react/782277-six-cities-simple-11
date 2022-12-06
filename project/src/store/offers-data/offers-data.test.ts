import {offersData, changeLocation, changeSort, selectOffer} from './offers-data';
import {fetchOffersAction} from './api-actions';
import {OffersDataState} from '../../types/state';
import {Offers} from '../../types/offer';
import {makeFakeOffer, makeFakeOffers} from '../../utils/mocks';
import {Location, SortType} from '../../constants';

const fakeOffer = makeFakeOffer();
const fakeOffers = makeFakeOffers();

describe('Reducer: offersData', () => {
  let state: OffersDataState;

  beforeEach(() => {
    state = {
      location: Location.Paris,
      sortType: SortType.Popular,
      offers: [] as Offers,
      selectedOffer: null,
      isOffersLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: changeLocation', () => {
    it('should change location by given value', () => {
      expect(offersData.reducer(state, {type: changeLocation, payload: Location.Brussels}))
        .toEqual({...state, location: Location.Brussels});
    });
  });

  describe('Action: changeSort', () => {
    it('should change sort type by given value', () => {
      expect(offersData.reducer(state, {type: changeSort, payload: SortType.PriceToHigh}))
        .toEqual({...state, sortType: SortType.PriceToHigh});
    });
  });

  describe('Action: selectOffer', () => {
    it('should change selected offer by given value', () => {
      expect(offersData.reducer(state, {type: selectOffer, payload: fakeOffer}))
        .toEqual({...state, selectedOffer: fakeOffer});
    });

    it('should change selected offer by given null', () => {
      expect(offersData.reducer(state, {type: selectOffer, payload: null}))
        .toEqual({...state, selectedOffer: null});
    });
  });

  describe('Action: fetchOffersAction', () => {
    it('should update loading status to "true" if action pending', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.pending.type}))
        .toEqual({...state, isOffersLoading: true});
    });

    it('should update loading status to "false" and loaded offers if action fulfilled', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: fakeOffers}))
        .toEqual({...state, isOffersLoading: false, offers: fakeOffers});
    });
  });
});
