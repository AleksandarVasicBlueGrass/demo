import React, {FC} from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {AppNavigators} from './routes';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import {DMTabBar} from '@molecules';
import {NO_HEADER_SCREEN_OPTIONS} from './headerOptions';

const BottomTab = createBottomTabNavigator();

const renderTabs = (props: BottomTabBarProps): JSX.Element => (
  <DMTabBar {...props} />
);

const TabNavigator: FC = () => (
  <BottomTab.Navigator
    initialRouteName={AppNavigators.HOME_NAVIGATOR}
    tabBar={renderTabs}>
    <BottomTab.Screen
      options={NO_HEADER_SCREEN_OPTIONS as BottomTabNavigationOptions}
      name={AppNavigators.HOME_NAVIGATOR}
      component={HomeNavigator}
    />
    <BottomTab.Screen
      options={NO_HEADER_SCREEN_OPTIONS as BottomTabNavigationOptions}
      name={AppNavigators.SETTINGS_NAVIGATOR}
      component={SettingsNavigator}
    />
  </BottomTab.Navigator>
);

export default TabNavigator;
