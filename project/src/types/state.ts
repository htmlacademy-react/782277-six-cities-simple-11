import {store} from '../store/store';
import {UserData} from './user';
import {Offers, Offer, OfferId} from './offer';
import {Reviews} from './review';
import {AuthorizationStatus} from '../const';


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type AppProcessState = {
  location: string;
  sortType: string;
  selectedOfferId: OfferId | null;
};

export type UserDataState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type OffersDataState = {
  offers: Offers;
  isOffersLoading: boolean;
};

export type OfferPropertyDataState = {
  offerProperty: Offer | null;
  isOfferPropertyLoading: boolean;
  nearOffers: Offers | null;
  isNearOffersLoading: boolean;
  reviews: Reviews | null;
  isReviewsLoading: boolean;
  isReviewFormBlocked: boolean;
  hasError: boolean;
};
