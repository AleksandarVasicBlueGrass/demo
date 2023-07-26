import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {DMIcon, DMText} from '@atoms';
import Icons from '@icons';
import {Colors} from 'theme';
import styles from './styles';

type DMTextIconProps = {
  icon: keyof typeof Icons;
  iconColor?: keyof typeof Colors;
  title?: string | null;
};
const DMTextIcon: FC<DMTextIconProps> = ({
  icon,
  iconColor = 'WHITE_64',
  title,
}) => {
  return (
    <View style={styles.container}>
      <DMIcon icon={icon} color={iconColor} width={17} height={17} />
      <DMText
        font="FAMILIJEN_GROTESK/M/XXS/M"
        letterSpacing={0.6}
        color="WHITE_64"
        children={title}
        style={styles.text}
      />
    </View>
  );
};

export default memo(DMTextIcon);
