import { PixelRatio } from 'react-native';

export const fontSizer = (size) => {
  return size * PixelRatio.getFontScale();
};

export const boxSizer = (size) => {
  return PixelRatio.getPixelSizeForLayoutSize(size);
};
