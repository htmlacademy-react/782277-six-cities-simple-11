import {offerPropertyData} from './offer-property-data';
import {fetchOfferPropertyAction, fetchNearOffersAction, fetchReviewAction, sendReviewAction} from './api-action';
import {OfferPropertyDataState} from '../../types/state';
import {makeFakeOffer, makeFakeOffers, makeFakeReviews} from '../../utils/mocks';

const fakeOffer = makeFakeOffer();
const fakeOffers = makeFakeOffers();
const fakeReviews = makeFakeReviews();

describe('Reducer: offerPropertyData', () => {
  let state: OfferPropertyDataState;

  beforeEach(() => {
    state = {
      offerProperty: null,
      isOfferPropertyLoading: false,
      hasOfferPropertyError: false,
      nearOffers: null,
      reviews: [],
      isReviewFormBlocked: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offerPropertyData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('Action: fetchOfferPropertyAction', () => {
    it('should update loading status to "true" and reset error if action pending', () => {
      expect(offerPropertyData.reducer(state, {type: fetchOfferPropertyAction.pending.type}))
        .toEqual({...state, isOfferPropertyLoading: true, hasOfferPropertyError: false});
    });

    it('should update loading status to "false" and loaded offer property if action fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: fetchOfferPropertyAction.fulfilled.type, payload: fakeOffer}))
        .toEqual({...state, isOfferPropertyLoading: false, offerProperty: fakeOffer});
    });

    it('should update loading status to "false" and add error if action rejected', () => {
      expect(offerPropertyData.reducer(state, {type: fetchOfferPropertyAction.rejected.type}))
        .toEqual({...state, isOfferPropertyLoading: false, hasOfferPropertyError: true});
    });
  });

  describe('Action: fetchNearOffersAction', () => {
    it('should loaded nearest offers if action fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: fetchNearOffersAction.fulfilled.type, payload: fakeOffers}))
        .toEqual({...state, nearOffers: fakeOffers});
    });
  });

  describe('Action: fetchReviewAction', () => {
    it('should loaded reviews if action fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: fetchReviewAction.fulfilled.type, payload: fakeReviews}))
        .toEqual({...state, reviews: fakeReviews});
    });
  });

  describe('Action: sendReviewAction', () => {
    it('should update form block status to "true" if action pending', () => {
      expect(offerPropertyData.reducer(state, {type: sendReviewAction.pending.type}))
        .toEqual({...state, isReviewFormBlocked: true});
    });

    it('should update form block status to "false" if action fulfilled', () => {
      expect(offerPropertyData.reducer(state, {type: sendReviewAction.fulfilled.type, payload: fakeOffer}))
        .toEqual({...state, isReviewFormBlocked: false});
    });

    it('should update form block status to "false" if action rejected', () => {
      expect(offerPropertyData.reducer(state, {type: sendReviewAction.rejected.type}))
        .toEqual({...state, isReviewFormBlocked: false});
    });
  });
});
