import {store} from '../store/store';
import {UserData} from './user';
import {Offers, Offer} from './offer';
import {AuthorizationStatus} from '../const';


export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type OffersData = {
  offers: Offers | null;
  isOffersLoading: boolean;
  hasError: boolean;
};

export type OfferPropertyData = {
  offerItem: Offer | null;
  isOfferItemLoading: boolean;
  nearOffers: Offers | null;
  isNearOffersLoading: boolean;
  hasError: boolean;
};
