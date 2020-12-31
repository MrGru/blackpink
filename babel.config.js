const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
]);

module.exports = (api) => {
  const babelEnv = api.env();
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', {exclude: ['error', 'warn']}]);
  }
  return {
    presets,
    plugins,
  };
};
