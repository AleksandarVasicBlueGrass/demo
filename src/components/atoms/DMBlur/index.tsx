import React, {FC} from 'react';
import {BlurView} from '@react-native-community/blur';
import {Colors} from '@theme';
import styles from './styles';

type DMBlurProps = {
  visible: boolean;
};

const DMBlur: FC<DMBlurProps> = ({visible}) => {
  return visible ? (
    <BlurView
      style={styles.blur}
      blurAmount={1}
      blurType="dark"
      reducedTransparencyFallbackColor={Colors.BLACK_48}
    />
  ) : (
    false
  );
};

export default DMBlur;
