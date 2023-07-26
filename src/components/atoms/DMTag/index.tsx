import React, {FC, memo} from 'react';
import {View} from 'react-native';
import {DMText} from '@atoms';
import styles from './styles';

type DMTagProps = {
  title?: string | null;
};

const DMTag: FC<DMTagProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <DMText
        font="FAMILIJEN_GROTESK/R/XXS/M"
        letterSpacing={0.2}
        children={title}
        color="WHITE"
        style={styles.text}
      />
    </View>
  );
};

export default memo(DMTag);
