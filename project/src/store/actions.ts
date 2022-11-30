import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../enum';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);
