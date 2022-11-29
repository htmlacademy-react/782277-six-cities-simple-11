import {createReducer} from '@reduxjs/toolkit';
import {
  setDataLoadingStatus,
  loadOffers,
  loadOfferItem,
  loadNearOffers,
  loadReviews,
  setReviewFormBlocked,
  changeLocation,
  changeSort,
  selectOffer
} from './actions';
import {Offers, OfferId, Offer} from '../types/offer';
import {Reviews} from '../types/review';
import {DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  isDataLoading: boolean;
  offers: Offers;
  offerItem: Offer | null;
  nearOffers: Offers | null;
  reviews: Reviews | null;
  isReviewFormBlocked: boolean;
  location: string;
  sortType: string;
  selectedOfferId: OfferId | null;
};

const initialState: InitialState = {
  isDataLoading: false,
  offers: [] as Offers,
  offerItem: null,
  nearOffers: null,
  reviews: null,
  isReviewFormBlocked: false,
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  selectedOfferId: null,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferItem, (state, action) => {
      state.offerItem = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewFormBlocked, (state, action) => {
      state.isReviewFormBlocked = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
