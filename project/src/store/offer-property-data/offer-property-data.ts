import {createSlice} from '@reduxjs/toolkit';
import {fetchOfferPropertyAction, fetchNearOffersAction, fetchReviewAction, sendReviewAction} from './api-action';
import {OfferPropertyDataState} from '../../types/state';
import {Reducer} from '../../const';

const initialState: OfferPropertyDataState = {
  offerProperty: null,
  isOfferPropertyLoading: false,
  nearOffers: null,
  reviews: [],
  isReviewFormBlocked: false,
  hasOfferPropertyError: false
};

export const offerPropertyData = createSlice({
  name: Reducer.OfferProperty,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferPropertyAction.pending, (state) => {
        state.isOfferPropertyLoading = true;
        state.hasOfferPropertyError = false;
      })
      .addCase(fetchOfferPropertyAction.fulfilled, (state, action) => {
        state.isOfferPropertyLoading = false;
        state.offerProperty = action.payload;
      })
      .addCase(fetchOfferPropertyAction.rejected, (state) => {
        state.isOfferPropertyLoading = false;
        state.hasOfferPropertyError = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewFormBlocked = true;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.isReviewFormBlocked = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewFormBlocked = false;
      });
  }
});
