import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppProcessState} from '../../types/state';
import {OfferId} from '../../types/offer';
import {Reducer, Location, SortType} from '../../const';

const initialState: AppProcessState = {
  location: Location.Paris,
  sortType: SortType.Popular,
  selectedOfferId: null
};

export const appProcess = createSlice({
  name: Reducer.Offers,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<OfferId | null>) => {
      state.selectedOfferId = action.payload;
    }
  }
});

export const {changeLocation, changeSort, selectOffer} = appProcess.actions;
