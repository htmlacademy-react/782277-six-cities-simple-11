import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  requireAuthorization,
  checkRoute,
  loadUserData,
  setDataLoadingStatus,
  loadOffers,
  loadOfferItem,
  loadNearOffers,
  loadReviews,
  setReviewFormBlocked,
  redirectToRoute
} from './actions';
import {removeToken, saveToken} from '../services/token';

import {AppDispatch, State} from '../types/state';
import {AuthorizationData} from '../types/authorization-data';
import {UserData} from '../types/user';
import {ReviewData, Reviews} from '../types/review';
import {Offers, Offer, OfferId} from '../types/offer';

import {APIRoute, AppRoute, AuthorizationStatus} from '../const';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

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
      dispatch(checkRoute(true));
    } catch {
      dispatch(setDataLoadingStatus(false));
      dispatch(checkRoute(false));
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

export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthorization',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Authorized));
      dispatch(loadUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuthorized));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthorizationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    dispatch(loadUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuthorized));
  }
);
