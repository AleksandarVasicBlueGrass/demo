import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from '@theme';
import styles from './styles';

const DMLoadingSpinner: FC = () => {
  return (
    <ActivityIndicator
      size="small"
      color={Colors.BLUE}
      style={styles.spinner}
    />
  );
};

export default DMLoadingSpinner;
