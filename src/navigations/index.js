// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

// const RootNavigator = createSwitchNavigator(
//   {
//     Auth: AuthNavigator,
//     App: AppNavigator,
//   },
//   {
//     initialRouteName: 'Auth',
//   },
// );

// export default createAppContainer(RootNavigator);

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Auth'} screenOptions={screenOptions}>
      <Stack.Screen name={'Auth'} component={AuthNavigator} />
      <Stack.Screen name={'App'} component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
