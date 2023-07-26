import React, {FC} from 'react';
import {View} from 'react-native';
import {DMText} from '@atoms';
import styles from './styles';

const DMHeader: FC = () => {
  return (
    <View style={styles.container}>
      <DMText font="CABINET_GROTESK/B/XL/XL" color="WHITE" children="Hi Leo" />
      <DMText
        font="NANUM_PEN/R/L/L"
        color="WHITE_64"
        children="It’s time for lunch:)"
      />
    </View>
  );
};

export default DMHeader;
