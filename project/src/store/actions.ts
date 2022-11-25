import {createAction} from '@reduxjs/toolkit';
import {Offers, Offer} from '../types/offer';
import {UserData} from '../types/user';
import {AppRoute, AuthorizationStatus} from '../const';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({payload: status})
);

export const loadUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({payload: userData})
);

export const loadOffers = createAction(
  'data/loadOffers',
  (offers: Offers) => ({payload: offers})
);

export const setOffersDataLoadingStatus = createAction(
  'data/setOffersDataLoadingStatus',
  (status: boolean) => ({payload: status})
);

export const loadOfferItem = createAction(
  'data/loadOfferItem',
  (offerItem: Offer) => ({payload: offerItem})
);

export const loadNearOffers = createAction(
  'data/loadNearOffers',
  (nearestOffers: Offers) => ({payload: nearestOffers})
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
  (offerId: number | null) => ({payload: offerId})
);
