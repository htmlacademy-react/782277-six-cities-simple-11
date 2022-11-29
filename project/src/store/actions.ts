import {createAction} from '@reduxjs/toolkit';
import {OfferId} from '../types/offer';
import {AppRoute} from '../const';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);

export const changeLocation = createAction(
  'location/changeLocation',
  (location: string) => ({payload: location})
);

export const changeSort = createAction(
  'sort/changeSort',
  (sort: string) => ({payload: sort})
);

export const selectOffer = createAction(
  'map/selectOffer',
  (offerId: OfferId | null) => ({payload: offerId})
);
