import 'react-native-gesture-handler';
import '@/locales';

import {ApplicationNavigator} from '@/navigators';
import React from 'react';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <ApplicationNavigator />
    </RecoilRoot>
  );
};

export default App;
