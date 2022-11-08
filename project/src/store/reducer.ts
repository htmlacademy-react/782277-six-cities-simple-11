import {createReducer} from '@reduxjs/toolkit';
import {changeLocation, fillOfferList} from './actions';
import {city, offers} from '../mocks/offer';

const initialState = {
  city,
  offers
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state) => state)
    .addCase(fillOfferList, (state) => state);
});
