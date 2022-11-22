import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, checkError, changeLocation, changeSort, loadOffers, selectOffer} from './actions';
import {Offers} from '../types/offer';
import {AuthorizationStatus, DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  location: string;
  sortType: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  offers: [],
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.location = action.payload;
    })
    .addCase(checkError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
