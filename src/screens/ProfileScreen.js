import {Text, View} from 'react-native';

import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from 'stores';

const ProfileScreen = observer((props) => {
  const {counterStore} = useStores();
  return (
    <View>
      <Text>Profile with counter: {counterStore.count}</Text>
    </View>
  );
});

export default ProfileScreen;
