import {TextStyle} from 'react-native';
import {Font, FONT_FAMILIES, SIZES, WEIGHTS, FONTS} from '@theme';

const generateFont = (font: Font) => {
  if (!font) {
    return;
  }
  const fontValues = font.split('/');

  if (fontValues.length < 4) {
    return null;
  }

  const fontFamily = fontValues[0];
  const fontWeight = fontValues[1];
  const fontSize = fontValues[2];
  const lineHeight = fontValues[3];

  return {
    fontFamily: FONTS?.[fontFamily as FONT_FAMILIES]?.[fontWeight as WEIGHTS],
    fontSize: SIZES[fontSize as keyof typeof SIZES],
    lineHeight: SIZES[lineHeight as keyof typeof SIZES],
  } as TextStyle;
};

export default generateFont;
