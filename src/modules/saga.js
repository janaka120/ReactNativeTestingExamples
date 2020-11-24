import {all} from 'redux-saga/effects';

import {userWatcher} from './signup/sagas';

function* watchAll() {
  yield all([userWatcher()]);
}

export default watchAll;
