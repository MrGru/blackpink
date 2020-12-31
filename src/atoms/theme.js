import {atom} from 'recoil';

export const themeAtom = atom({
  key: 'theme',
  default: 'default',
});

export const isDarkThemeAtom = atom({
  key: 'isDarkTheme',
  default: false,
});
