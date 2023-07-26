import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {NO_HEADER_SCREEN_OPTIONS} from './headerOptions';
import {Settings} from '@screens';

export type SettingsNavigatorParams = {
  [AppRoute.SETTINGS_SCREEN]: undefined;
};

const SettingsStack = createNativeStackNavigator<SettingsNavigatorParams>();

const SettingsNavigator: FC = (): JSX.Element => {
  return (
    <SettingsStack.Navigator initialRouteName={AppRoute.SETTINGS_SCREEN}>
      <SettingsStack.Screen
        name={AppRoute.SETTINGS_SCREEN}
        component={Settings}
        options={NO_HEADER_SCREEN_OPTIONS}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
