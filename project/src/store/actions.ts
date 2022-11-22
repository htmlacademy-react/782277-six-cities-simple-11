import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';

export const changeLocation = createAction(
  'offers/changeLocation',
  (location: string) => ({payload: location})
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: string) => ({payload: sort})
);

export const loadOffers = createAction(
  'offers/loadOffers',
  (offers: Offers) => ({payload: offers})
);

export const updateOffers = createAction(
  'offers/updateOffers'
);

export const selectOffer = createAction(
  'offers/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
