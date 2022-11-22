import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {loadOffers, requireAuthorization} from './actions';
import {removeToken, saveToken} from '../services/token';

import {AppDispatch, State} from '../types/state';
import {AuthorizationData} from '../types/authorization-data';
import {UserData} from '../types/user';
import {Offers} from '../types/offer';

import {APIRoute, AuthorizationStatus} from '../const';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
  }
);

export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Authorized));
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
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
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
