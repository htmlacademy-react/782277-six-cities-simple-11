import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {AuthorizationStatus} from '../const';

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({payload: status})
);

export const checkError = createAction(
  'data/checkError',
  (error: string | null) => ({payload: error})
);

export const changeLocation = createAction(
  'location/changeLocation',
  (location: string) => ({payload: location})
);

export const changeSort = createAction(
  'sort/changeSort',
  (sort: string) => ({payload: sort})
);

export const loadOffers = createAction(
  'data/loadOffers',
  (offers: Offers) => ({payload: offers})
);

export const selectOffer = createAction(
  'map/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
