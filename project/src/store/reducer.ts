import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadUserData,
  loadOffers,
  setOffersDataLoadingStatus,
  loadOfferItem,
  loadNearOffers,
  changeLocation,
  changeSort,
  selectOffer
} from './actions';
import {Offers, OfferId, Offer} from '../types/offer';
import {UserData} from '../types/user';
import {AuthorizationStatus, DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  offers: Offers;
  isOffersDataLoading: boolean;
  offerItem: Offer | null;
  nearOffers: Offers;
  location: string;
  sortType: string;
  selectedOfferId: OfferId | null;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
  offers: [] as Offers,
  isOffersDataLoading: false,
  offerItem: null,
  nearOffers: [] as Offers,
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
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
