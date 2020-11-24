import React from 'react';
import ReactNative from 'react-native';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import Toaster from '../scenes/about/components/Toaster';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../modules/reducer';
import watchAll from '../modules/saga';
import createSagaMiddleware from 'redux-saga';
import Navigator from '_navigations';

const sagaMiddleware = createSagaMiddleware();
export let store;
export const renderScreen = page => {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchAll);

  return render(
    <Provider store={store}>
      {page}
      <Toaster />
    </Provider>,
  );
};

export const renderWithNavigationScreen = () => {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchAll);

  return render(
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
        <Toaster />
      </NavigationContainer>
    </Provider>,
  );
};
