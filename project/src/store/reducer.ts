import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, sortOffers, updateOffers, selectOffer} from './actions';
import {Offers} from '../types/offer';
import {getOffersByLocation, getOffersBySort} from '../utils';

const DEFAULT_LOCATION = 'Paris';
const DEFAULT_SORT = 'Popular';

type InitialState = {
  location: string;
  sortType: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  offers: getOffersByLocation(DEFAULT_LOCATION),
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
