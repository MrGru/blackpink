import {moderateScale} from 'react-native-size-matters';

export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  primary: '#E14032',
  text: '#212529',
  success: '#28a745',
  error: '#dc3545',
};

export const NavigatioinColors = {
  primary: Colors.primary,
};

export const FontSize = {
  small: moderateScale(12),
  regular: moderateScale(14),
  large: moderateScale(18),
};

export const MetricsSizes = {
  none: 0,
  tiny: 4,
  small: 8,
  short: 12,
  regular: 16,
  medium: 24,
  large: 32,
  huge: 48,
  gigantic: 64,
};
