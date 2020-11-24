import {ReducersMapObject, combineReducers} from 'redux';

import {signupReducer} from './signup/reducer';
import {toasterReducer} from './toaster/reducer';

const reducers: ReducersMapObject = {
  signup: signupReducer,
  toaster: toasterReducer,
};

export const rootReducer = combineReducers(reducers);
