import CounterStore from './counter.store';
import React from 'react';
import ThemeStore from './theme.store';
import {createMobxDebugger} from 'mobx-flipper';
import {spy} from 'mobx';

const counterStore = new CounterStore();
const themeStore = new ThemeStore();

const storesContext = React.createContext({
  counterStore,
  themeStore,
});

if (__DEV__) {
  spy(createMobxDebugger(counterStore));
}
export const useStores = () => React.useContext(storesContext);
