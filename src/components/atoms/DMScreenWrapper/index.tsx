import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

type DMScreenWrapperProps = {
  children?: JSX.Element | JSX.Element[];
  edges?: ReadonlyArray<Edge>;
  style?: ViewStyle;
};

const DMScreenWrapper: FC<DMScreenWrapperProps> = ({
  children,
  edges = ['left', 'right'],
  style,
}) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

export default DMScreenWrapper;
