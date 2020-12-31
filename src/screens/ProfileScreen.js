import {Text, View} from 'react-native';
import {useRecoilState, useResetRecoilState} from 'recoil';

import React from 'react';
import atomIncrease from '@/atoms/atom';

const ProfileScreen = (props) => {
  const [item, setItem] = useRecoilState(atomIncrease);
  return (
    <View>
      <Text>Profile with counter: {item}</Text>
    </View>
  );
};

export default ProfileScreen;
