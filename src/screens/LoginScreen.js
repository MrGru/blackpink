import {Text, TouchableOpacity, View} from 'react-native';
import {useRecoilState, useResetRecoilState} from 'recoil';

import React from 'react';
import atomIncrease from '@/atoms/atom';

const LoginScreen = ({navigation}) => {
  const [item, setItem] = useRecoilState(atomIncrease);
  const moveToHome = () => {
    navigation.navigate('Main');
  };
  return (
    <View
      testID="LoginScreen"
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login {item}</Text>
      <TouchableOpacity
        onPress={() => {
          setItem(0);
        }}>
        <Text>Click me!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={moveToHome}>
        <Text>Change screen to main</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
