import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process';
import {Reducer} from '../const';

export const rootReducer = combineReducers({
  [Reducer.User]: userProcess.reducer
});
