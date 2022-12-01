import {combineReducers} from '@reduxjs/toolkit';
import {userData} from './user-data/user-data';
import {offersData} from './offers-data/offers-data';
import {offerPropertyData} from './offer-property-data/offer-property-data';
import {Reducer} from '../const';

export const rootReducer = combineReducers({
  [Reducer.User]: userData.reducer,
  [Reducer.Offers]: offersData.reducer,
  [Reducer.OfferProperty]: offerPropertyData.reducer
});
