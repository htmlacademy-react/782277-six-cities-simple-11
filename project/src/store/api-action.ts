import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  loadReviews,
  setReviewFormBlocked,

} from './actions';


import {AppDispatch, State} from '../types/state';


import {ReviewData, Reviews} from '../types/review';
import {OfferId} from '../types/offer';

import {APIRoute,} from '../const';


export const fetchOfferItemAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferItem',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));

    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadOfferItem(data));
      dispatch(setDataLoadingStatus(false));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      dispatch(setDataLoadingStatus(false));
    }
  }
);

export const fetchNearOffersAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearOffers(data));
  }
);

export const fetchReviewAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewAction',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(loadReviews(data));
  }
);

export const sendReviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewAction',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Reviews}/${id}`, {rating, comment});
    dispatch(fetchReviewAction(id));
    dispatch(setReviewFormBlocked(false));
  }
);
