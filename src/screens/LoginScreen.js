import {Text, View} from 'react-native';

import React from 'react';
import {observer} from 'mobx-react-lite';

const LoginScreen = observer((props) => {
  return (
    <View testID="LoginScreen">
      <Text>Login</Text>
    </View>
  );
});

export default LoginScreen;
