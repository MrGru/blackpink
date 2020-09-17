import './src/screen';

import {Navigation} from 'react-native-navigation';

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
                  text: 'Home',
                },
              },
              bottomTab: {
                text: 'Home',
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
                  text: 'Feature',
                },
              },
              bottomTab: {
                text: 'Feature',
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
                  text: 'Counter',
                },
              },
              bottomTab: {
                text: 'Counter',
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
                  text: 'Profile',
                },
              },
              bottomTab: {
                text: 'Profile',
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
  Navigation.setRoot(mainRoot);
});
