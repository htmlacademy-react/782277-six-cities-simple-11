import {combineReducers} from '@reduxjs/toolkit';
import {appProcess} from './app-process/app-process';
import {userData} from './user-data/user-data';
import {offersData} from './offers-data/offers-data';
import {offerPropertyData} from './offer-property-data/offer-property-data';
import {Reducer} from '../const';

export const rootReducer = combineReducers({
  [Reducer.AppProcess]: appProcess.reducer,
  [Reducer.User]: userData.reducer,
  [Reducer.Offers]: offersData.reducer,
  [Reducer.OfferProperty]: offerPropertyData.reducer
});
