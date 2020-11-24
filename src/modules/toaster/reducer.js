import {Reducer} from 'redux';
import {ToasterActionTypes} from './types';

const initialState = null;

export const toasterReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ToasterActionTypes.ADD_TOAST:
      return action.payload;
    default:
      return state;
  }
};
