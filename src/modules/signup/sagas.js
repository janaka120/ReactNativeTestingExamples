import {call, put, takeEvery} from 'redux-saga/effects';

import {SignUpApi} from '../../api/signup';

import {SignUpActionTypes} from './types';
import {showErrorMessage, showSuccessMessage} from '../toaster/actions';
import {showLoader} from './actions';

function* registerUserSaga({payload}) {
  try {
    const {email, password} = payload;
    yield call(SignUpApi.registerUser, {email, password});
    yield put(showLoader(false));
    yield put(showSuccessMessage('Register successful !'));
  } catch (err) {
    yield put(showLoader(false));
    yield put(showErrorMessage('Oops something went wrong...'));
  }
}

export function* userWatcher() {
  yield takeEvery(SignUpActionTypes.USER_REGISTRATION, registerUserSaga);
}
