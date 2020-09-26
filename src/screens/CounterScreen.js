import {Button, Text, View} from 'react-native';

import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from 'stores';

const CounterScreen = observer((props) => {
  const {counterStore} = useStores();

  return (
    <View>
      <Text>{`Clicked ${counterStore.count}`}</Text>
      <Button title="Increment Counter" onPress={counterStore.increment} />
      <Button title="Decrement Counter" onPress={counterStore.decrement} />
    </View>
  );
});

export default CounterScreen;
