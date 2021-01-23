import {DefaultTheme} from '@react-navigation/native';
import COLORS from './COLORS';

export const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.transparent,
    primary: COLORS.secondaryColor,
    text: COLORS.white,
    placeholder: COLORS.secondaryColor,
    underlineColor: COLORS.secondaryColor,
  },
};

export const colors = {
  // Global
  primaryColor: '#ff073a',
  secondaryColor: '#2cf4da',
  transparent: '#00000000',
  white: '#f0f0f0',

  // UI
  inactive: '#a0a0a0',
  background: '#404040',
  card: '#303030',
  text: '#f9f9f9',

  // Gradient
  grd1: '#ff073a',
  grd2: '#ff06b5',
};
