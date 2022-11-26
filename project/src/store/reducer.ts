import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setError,
  loadUserData,
  loadOffers,
  setOffersDataLoadingStatus,
  loadOfferItem,
  loadNearOffers,
  loadReviews,
  setReviewFormBlocked,
  changeLocation,
  changeSort,
  selectOffer
} from './actions';
import {Offers, OfferId, Offer} from '../types/offer';
import {UserData} from '../types/user';
import {Reviews} from '../types/review';
import {AuthorizationStatus, DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  errorCode: number | null;
  userData: UserData;
  offers: Offers;
  isOffersDataLoading: boolean;
  offerItem: Offer | null;
  nearOffers: Offers | null;
  reviews: Reviews | null;
  isReviewFormBlocked: boolean;
  location: string;
  sortType: string;
  selectedOfferId: OfferId | null;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  errorCode: null,
  userData: {} as UserData,
  offers: [] as Offers,
  isOffersDataLoading: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.errorCode = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
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
