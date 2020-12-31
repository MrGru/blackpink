import {
  CounterScreen,
  FeatureScreen,
  HomeScreen,
  ProfileScreen,
} from '@/screens';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Counter" component={HomeScreen} />
      <Tab.Screen name="Feature" component={FeatureScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default MainNavigator;
