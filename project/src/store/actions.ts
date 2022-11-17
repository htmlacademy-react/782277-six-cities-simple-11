import {createAction} from '@reduxjs/toolkit';

export const changeLocation = createAction(
  'location/changeLocation',
  (location: string) => ({payload: location})
);

export const sortOffers = createAction(
  'offers/sortOffers',
  (sort: string) => ({payload: sort})
);

export const updateOffers = createAction(
  'offers/updateOffers'
);

export const selectOffer = createAction(
  'offers/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
