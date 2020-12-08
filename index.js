import 'screens';

import {Navigation} from 'react-native-navigation';
import i18n from 'locales';

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
            options: {
              topBar: {
                title: {
                  text: i18n.t('Home'),
                },
              },
              bottomTab: {
                text: i18n.t('Home'),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Feature',
                },
              },
            ],
            options: {
              topBar: {
                title: {
                  text: i18n.t('Feature'),
                },
              },
              bottomTab: {
                text: i18n.t('Feature'),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Counter',
                },
              },
            ],
            options: {
              topBar: {
                title: {
                  text: i18n.t('Counter'),
                },
              },
              bottomTab: {
                text: i18n.t('Counter'),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Profile',
                },
              },
            ],
            options: {
              topBar: {
                title: {
                  text: i18n.t('Profile'),
                },
              },
              bottomTab: {
                text: i18n.t('Profile'),
              },
            },
          },
        },
      ],
    },
  },
};

const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
    style: 'light',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 16,
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

const isLoggedIn = () => {
  return false;
};
