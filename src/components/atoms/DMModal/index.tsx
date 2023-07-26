import React, {FC, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '@theme';
import styles from './styles';

type DMModalProps = {
  visible: boolean;
  children: ReactNode;
  style?: ViewStyle;
  onDismiss: () => void;
};

const DMModal: FC<DMModalProps> = ({visible, children, style, onDismiss}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onDismiss}
      useNativeDriver
      backdropColor={Colors.TRANSPARENT}
      style={styles.container}
      onDismiss={onDismiss}>
      <View style={[styles.contentContainer, style]}>{children}</View>
    </Modal>
  );
};

export default DMModal;
