import React, {FC} from 'react';
import {View} from 'react-native';
import {DMScreenWrapper} from '@atoms';
import styles from './styles';

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <DMScreenWrapper style={styles.container}>
      <View />
    </DMScreenWrapper>
  );
};

export default Settings;
