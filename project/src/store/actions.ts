import {createAction} from '@reduxjs/toolkit';

// export const changeCity = createAction(
//   'location/changeCity',
//   // () => ({})
// );

// export const updateOfferList = createAction(
//   'offer/updateOfferList',
//   // () => ({})
// );

export const selectOffer = createAction(
  'offer/selectOffer',
  (id: number | null) => ({payload: id})
);
