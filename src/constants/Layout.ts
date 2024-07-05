import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  window: {
    width,
    height,
  },
  button: 56,
  spacing: {
    xxs: 1,
    xs: 2,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
};
