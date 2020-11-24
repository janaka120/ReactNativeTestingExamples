import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import LoginScreen from '_scenes/login';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={'Login'}
      screenOptions={screenOptions}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
