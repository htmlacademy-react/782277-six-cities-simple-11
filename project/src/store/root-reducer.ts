import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process';
import {offersData} from './offers-data/offers-data';
import {offerPropertyData} from './offer-property-data/offer-property-data';
import {Reducer} from '../const';


export const rootReducer = combineReducers({
  [Reducer.User]: userProcess.reducer,
  [Reducer.Offers]: offersData.reducer,
  [Reducer.OfferProperty]: offerPropertyData.reducer
});
