import {Reducer} from 'redux';
import {SignUpActionTypes} from './types';

const initialState = {
  loading: false,
};

export const signupReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SignUpActionTypes.SHOW_LOADER:
      // console.log('SignUpActionTypes.SHOW_LOADER >>>>>>>>>>>', action.payload);
      return {...state, ...action.payload};
    default:
      return state;
  }
};
