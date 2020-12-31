module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['babel', 'react', 'react-naive', 'jest', 'detox', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
