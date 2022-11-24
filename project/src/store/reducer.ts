import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadUserData,
  setError,
  setOffersDataLoadingStatus,
  loadOffers,
  changeLocation,
  changeSort,
  selectOffer
} from './actions';
import {Offers} from '../types/offer';
import {UserData} from '../types/user';
import {AuthorizationStatus, DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  error: string | null;
  isOffersDataLoading: boolean;
  offers: Offers;
  location: string;
  sortType: string;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
  error: null,
  isOffersDataLoading: false,
  offers: [] as Offers,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
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
