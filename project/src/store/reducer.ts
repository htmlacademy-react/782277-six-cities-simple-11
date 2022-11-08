import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, fillOfferList} from './actions';
import {city, offers} from '../mocks/offer';

const initialState = {
  city,
  offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state) => {
      state.city = city;
    })
    .addCase(fillOfferList, (state) => {
      state.offers = offers;
    });
});
