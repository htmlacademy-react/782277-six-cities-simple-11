import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, changeSort, updateOffers, selectOffer} from './actions';
import {Offers} from '../types/offer';
import {getOffers} from '../utils';
import {DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  location: string;
  sortType: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  offers: getOffers(),
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(updateOffers, (state) => {
      state.offers = getOffers(state.location, state.sortType);
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
