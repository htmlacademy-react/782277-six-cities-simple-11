import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api-action';

import {OffersData} from '../../types/state';
import {Reducer} from '../../const';

const initialState: OffersData = {
  offers: null,
  isOffersLoading: false,
  hasError: false
};


export const offersData = createSlice({
  name: Reducer.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      });
  }
});
