import {Button, Text, View} from 'react-native';
import {useRecoilState, useResetRecoilState} from 'recoil';

import React from 'react';
import atomIncrease from '@/atoms/atom';

const CounterScreen = (props) => {
  const [item, setItem] = useRecoilState(atomIncrease);

  return (
    <View>
      <Text>{`Clicked ${item}`}</Text>
      <Button
        title="Increment Counter"
        onPress={() => {
          setItem(item + 1);
        }}
      />
      <Button
        title="Decrement Counter"
        onPress={() => {
          setItem(item - 1);
        }}
      />
    </View>
  );
};

export default CounterScreen;
