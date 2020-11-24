import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './reducer';
import watchAll from './saga';

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAll);
