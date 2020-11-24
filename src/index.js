import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import Toaster from './scenes/about/components/Toaster';

enableScreens();

import {store} from './modules/store';
import Navigator from '_navigations';

// export const App = () => (
//   <Provider store={store}>
//     <Home />
//     <Toaster />
//   </Provider>
// );

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
        <Toaster />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
