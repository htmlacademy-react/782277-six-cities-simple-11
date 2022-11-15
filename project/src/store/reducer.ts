import {createReducer} from '@reduxjs/toolkit';
import {selectOffer} from './actions';
import {city, offers} from '../mocks/offer';
import {City, Offers} from '../types/offer';

type InitialState = {
  city: City;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  city,
  offers,
  selectedOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
