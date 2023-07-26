import React, {FC, memo} from 'react';
import {ViewStyle, TouchableOpacity} from 'react-native';
import Icons from '@icons';
import {Colors} from '@theme';
import {DMText, DMIcon} from '@atoms';
import styles from './styles';

const getFontStyle = (size: ButtonSize) => {
  switch (size) {
    case 'large':
      return 'FAMILIJEN_GROTESK/M/XXS/M';
    case 'medium':
      return 'FAMILIJEN_GROTESK/R/XS/M';
    case 'small':
      return 'FAMILIJEN_GROTESK/R/XXS/M';
    default:
      break;
  }
};

type ButtonSize = 'large' | 'small' | 'medium';

type DMButtonProps = {
  title: string;
  leftIcon?: keyof typeof Icons;
  size?: ButtonSize;
  backgroundColor?: keyof typeof Colors;
  textColor?: keyof typeof Colors;
  borderColor?: keyof typeof Colors;
  style?: ViewStyle;
  onPress?: () => void;
};

const DMButton: FC<DMButtonProps> = ({
  title,
  size = 'large',
  backgroundColor = 'WHITE',
  textColor = 'BLACK',
  borderColor = null,
  style,
  leftIcon,
  onPress,
}) => {
  const buttonStyle = [
    styles.container,
    (size === 'small' || size === 'medium') && styles.small,
    borderColor && {
      ...styles.border,
      borderColor: Colors[borderColor],
    },
    {backgroundColor: Colors[backgroundColor]},
    style,
  ];
  const onPressHandler = () => onPress?.();
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPressHandler}
      activeOpacity={0.8}>
      {leftIcon && (
        <DMIcon icon={leftIcon} width={21.8} height={21.8} color={textColor} />
      )}
      <DMText
        font={getFontStyle(size)!}
        letterSpacing={1.2}
        alignSelf="center"
        color={textColor}
        children={title}
      />
    </TouchableOpacity>
  );
};

export default memo(DMButton);
