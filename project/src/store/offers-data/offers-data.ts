import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api-actions';

import {OffersDataState} from '../../types/state';
import {Offers} from '../../types/offer';
import {Reducer} from '../../const';


const initialState: OffersDataState = {
  offers: [] as Offers,
  isOffersLoading: false
};

export const offersData = createSlice({
  name: Reducer.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      });
  }
});
