import {Text, View} from 'react-native';

import React from 'react';
import {observer} from 'mobx-react-lite';

const FeatureScreen = observer((props) => {
  return (
    <View>
      <Text>Feature Screen</Text>
    </View>
  );
});

export default FeatureScreen;
