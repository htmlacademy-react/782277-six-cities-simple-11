import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, sortOffers, updateOffers, selectOffer} from './actions';
import {Offers} from '../types/offer';
import {getOffersByLocation, getOffersBySort} from '../utils';
import {DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  location: string;
  sortType: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  location: DEFAULT_LOCATION.name,
  sortType: DEFAULT_SORT,
  offers: getOffersByLocation(DEFAULT_LOCATION.name),
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
      state.offers = getOffersBySort(state.location, state.sortType, state.offers);
    })
    .addCase(updateOffers, (state) => {
      state.offers = getOffersByLocation(state.location);
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
