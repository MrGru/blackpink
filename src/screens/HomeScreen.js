import {Text, View} from 'react-native';

import React from 'react';
import {observer} from 'mobx-react-lite';

const HomeScreen = observer((props) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
});

export default HomeScreen;
