import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Register" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
