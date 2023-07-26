import React, {FC, memo} from 'react';
import {ViewStyle, TouchableOpacity} from 'react-native';
import Icons from '@icons';
import {Colors} from '@theme';
import styles from './styles';

type DMIconProps = {
  icon: keyof typeof Icons;
  color?: keyof typeof Colors;
  width?: number;
  height?: number;
  style?: ViewStyle;
  onPress?: () => void;
};

const DMIcon: FC<DMIconProps> = ({
  icon,
  color = 'BLACK',
  width = 20,
  height = 20,
  style,
  onPress = null,
}): JSX.Element | false => {
  const Icon = Icons?.[icon];
  const label = `${icon} icon`;

  if (!Icon) {
    return false;
  }

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        hitSlop={15}
        activeOpacity={0.8}
        style={[styles.icon, style]}
        accessibilityLabel={label}>
        <Icon fill={Colors[color]} width={width} height={height} />
      </TouchableOpacity>
    );
  }

  return (
    <Icon
      style={[styles.icon, style]}
      accessibilityLabel={label}
      fill={Colors[color]}
      width={width}
      height={height}
    />
  );
};

export default memo(DMIcon);
