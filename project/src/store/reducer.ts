import {createReducer} from '@reduxjs/toolkit';
import {
  changeLocation,
  changeSort,
  selectOffer
} from './actions';
import {OfferId} from '../types/offer';
import {DEFAULT_LOCATION, DEFAULT_SORT} from '../const';

type InitialState = {
  location: string;
  sortType: string;
  selectedOfferId: OfferId | null;
};

const initialState: InitialState = {
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
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
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
