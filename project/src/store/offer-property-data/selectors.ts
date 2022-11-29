import {State} from '../../types/state';
import {Reducer} from '../../const';
import {Offers, Offer} from '../../types/offer';
import {Reviews} from '../../types/review';

export const getOfferProperty = (state: State): Offer | null => state[Reducer.OfferProperty].offerProperty;
export const getOfferPropertyLoadingStatus = (state: State): boolean => state[Reducer.OfferProperty].isOfferPropertyLoading;
export const getOfferPropertyErrorStatus = (state: State): boolean => state[Reducer.OfferProperty].hasOfferPropertyError;

export const getNearOffers = (state: State): Offers | null => state[Reducer.OfferProperty].nearOffers;

export const getReviews = (state: State): Reviews | null => state[Reducer.OfferProperty].reviews;
export const getReviewFormBlockedStatus = (state: State): boolean => state[Reducer.OfferProperty].isReviewFormBlocked;
