import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppProcessState} from '../../types/state';
import {OfferId} from '../../types/offer';
import {Reducer, DEFAULT_LOCATION, DEFAULT_SORT} from '../../const';

const initialState: AppProcessState = {
  location: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  selectedOfferId: null
};

export const appProcess = createSlice({
  name: Reducer.Offers,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<OfferId | null>) => {
      state.selectedOfferId = action.payload;
    }
  }
});

export const {changeLocation, changeSort, selectOffer} = appProcess.actions;
