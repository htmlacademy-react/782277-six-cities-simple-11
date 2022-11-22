import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, changeLocation, changeSort, loadOffers, updateOffers, selectOffer} from './actions';
import {Offers} from '../types/offer';
import {getOffers} from '../utils';
import {AuthorizationStatus, DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  location: string;
  sortType: string;
  offers: Offers;
  selectedOfferId: number | null;
  AuthorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  AuthorizationStatus: AuthorizationStatus.Unknown,
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  offers: getOffers(),
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.location = action.payload;
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
    .addCase(updateOffers, (state) => {
      state.offers = getOffers(state.location, state.sortType);
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
