import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../constants';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);
