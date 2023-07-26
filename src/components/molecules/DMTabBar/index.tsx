import React, {FC} from 'react';
import {View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {DMIcon} from '@atoms';
import styles from './styles';
import {AppRoute, AppNavigators} from '@navigation';

const ICON_SIZES = {
  HEIGHT: 25,
  WIDTH: 25,
};

const DMTabBar: FC<BottomTabBarProps> = ({navigation}) => {
  const onPressHome = () => navigation.navigate(AppRoute.HOME_SCREEN);
  const onPressQR = () => navigation.goBack();
  const onPressSettings = () =>
    navigation.navigate(AppNavigators.SETTINGS_NAVIGATOR);

  return (
    <View style={styles.container}>
      <DMIcon
        icon="home"
        onPress={onPressHome}
        color="WHITE_48"
        width={ICON_SIZES.WIDTH}
        height={ICON_SIZES.HEIGHT}
      />
      <DMIcon
        icon="qr"
        width={27}
        height={27}
        style={styles.qrIcon}
        onPress={onPressQR}
      />
      <DMIcon
        icon="settings"
        onPress={onPressSettings}
        color="WHITE_48"
        width={ICON_SIZES.WIDTH}
        height={ICON_SIZES.HEIGHT}
      />
    </View>
  );
};

export default DMTabBar;
