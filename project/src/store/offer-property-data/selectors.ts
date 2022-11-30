import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offer';
import {Reviews, Review} from '../../types/review';
import {Reducer} from '../../enum';

const MAX_REVIEWS = 10;

const compareReviews: Record<string, (review: Review, nextReview: Review) => number> = {
  sortByData: (review: Review, nextReview: Review) => Date.parse(nextReview.date) - Date.parse(review.date)
};

export const getOfferProperty = (state: State): Offer | null => state[Reducer.OfferProperty].offerProperty;
export const getOfferPropertyLoadingStatus = (state: State): boolean => state[Reducer.OfferProperty].isOfferPropertyLoading;
export const getOfferPropertyErrorStatus = (state: State): boolean => state[Reducer.OfferProperty].hasOfferPropertyError;

export const getNearOffers = (state: State): Offers | null => state[Reducer.OfferProperty].nearOffers;

export const getReviews = (state: State): Reviews => state[Reducer.OfferProperty].reviews;
export const getReviewFormBlockedStatus = (state: State): boolean => state[Reducer.OfferProperty].isReviewFormBlocked;

export const getSelectedReviews = createSelector(
  getReviews,
  (reviews) => reviews.slice().sort(compareReviews.sortByData).slice(0, MAX_REVIEWS)
);
