import {LoginScreen, StartupScreen} from '@/screens';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import MainNavigator from './Main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '@/navigators/Root';
import startupAtom from '@/atoms/startup';
import {useRecoilValue} from 'recoil';
import {useTheme} from '@/theme';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const {Layout, darkMode, NavigationTheme} = useTheme();
  const {colors} = NavigationTheme;
  const isApplicationLoaded = useRecoilValue(startupAtom);

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Startup" component={StartupScreen} />
          {isApplicationLoaded && (
            <Stack.Screen name="Main" component={MainNavigator} />
          )}
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
