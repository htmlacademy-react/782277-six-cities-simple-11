import {store} from '../store/store';
import {UserData} from './user';
import {Offers, Offer, OfferId} from './offer';
import {Reviews} from './review';
import {AuthorizationStatus, Location, SortType} from '../const';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type UserDataState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type OffersDataState = {
  location: Location;
  sortType: SortType;
  selectedOfferId: OfferId | null;
  offers: Offers;
  isOffersLoading: boolean;
};

export type OfferPropertyDataState = {
  offerProperty: Offer | null;
  isOfferPropertyLoading: boolean;
  hasOfferPropertyError: boolean;
  nearOffers: Offers | null;
  reviews: Reviews | null;
  isReviewFormBlocked: boolean;
};
