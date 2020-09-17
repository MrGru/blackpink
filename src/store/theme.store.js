import {action, decorate, observable} from 'mobx';

export default class ThemeStore {
  theme = 'light';
  setTheme(newTheme) {
    this.theme = newTheme;
  }
}

decorate(ThemeStore, {
  theme: observable,
  setTheme: action,
});
