import {createAction} from '@reduxjs/toolkit';

export const changeLocation = createAction(
  'location/changeLocation',
  (location: string) => ({payload: location})
);

export const updateOfferList = createAction('offer/updateOfferList');

export const selectOffer = createAction(
  'offer/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
