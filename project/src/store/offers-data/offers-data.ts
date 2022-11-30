import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api-actions';
import {OffersDataState} from '../../types/state';
import {Offers, Offer} from '../../types/offer';
import {Reducer, Location, SortType} from '../../enum';

const initialState: OffersDataState = {
  location: Location.Paris,
  sortType: SortType.Popular,
  offers: [] as Offers,
  selectedOffer: null,
  isOffersLoading: false
};

export const offersData = createSlice({
  name: Reducer.Offers,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<Offer | null>) => {
      state.selectedOffer = action.payload;
    }
  },
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

export const {changeLocation, changeSort, selectOffer} = offersData.actions;
