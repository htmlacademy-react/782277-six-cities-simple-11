import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadUserData,
  setOffersDataLoadingStatus,
  loadOffers,
  loadOfferItem,
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
  isOffersDataLoading: boolean;
  offers: Offers;
  offerItem: Offer;
  location: string;
  sortType: string;
  selectedOfferId: OfferId | null;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
  isOffersDataLoading: false,
  offers: [] as Offers,
  offerItem: {} as Offer,
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferItem, (state, action) => {
      state.offerItem = action.payload;
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
