import {store} from '../store/store';
import {UserData} from './user';
import {Offers, Offer} from './offer';
import {Reviews} from './review';
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
  offerProperty: Offer | null;
  isOfferPropertyLoading: boolean;
  nearOffers: Offers | null;
  isNearOffersLoading: boolean;
  reviews: Reviews | null;
  isReviewsLoading: boolean;
  isReviewFormBlocked: boolean;
  hasError: boolean;
};
