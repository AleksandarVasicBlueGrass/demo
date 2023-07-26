import React, {FC, memo} from 'react';
import {Text, TextStyle, TouchableOpacity} from 'react-native';
import {Colors} from '@theme';
import {Font} from '@theme';
import {generateFont} from '@utils';

export type DMTextProps = {
  font: Font;
  children?: string | null;
  color?: keyof typeof Colors;
  letterSpacing?: number;
  textAlign?: 'left' | 'center' | 'right';
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  style?: TextStyle;
  onPress?: () => void;
};
const DMText: FC<DMTextProps> = ({
  font,
  letterSpacing = 0,
  color = 'BLACK',
  textAlign = 'left',
  alignSelf = 'flex-start',
  children = '',
  style,
  onPress,
}): JSX.Element => {
  const textStyle = [
    style,
    generateFont(font),
    {color: Colors[color], letterSpacing, textAlign, alignSelf},
  ];

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} hitSlop={15} activeOpacity={0.8}>
        <Text style={textStyle} children={children} />
      </TouchableOpacity>
    );
  }

  return <Text style={textStyle} children={children} />;
};

export default memo(DMText);
