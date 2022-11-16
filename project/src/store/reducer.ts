import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, updateOfferList, selectOffer} from './actions';
import {Offers} from '../types/offer';
import {getOffersByLocation} from '../utils';
import {DEFAULT_LOCATION} from '../const';

type InitialState = {
  location: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  location: DEFAULT_LOCATION.name,
  offers: getOffersByLocation(DEFAULT_LOCATION.name),
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(updateOfferList, (state) => {
      state.offers = getOffersByLocation(state.location);
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
