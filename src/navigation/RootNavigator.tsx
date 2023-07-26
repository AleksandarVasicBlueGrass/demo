import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppRoute, AppNavigators} from './routes';
import {
  NO_HEADER_SCREEN_OPTIONS,
  ORDER_SCREEN_OPTIONS,
  WELCOME_SCREEN_OPTIONS,
  ROOT_SCREEN_OPTIONS,
} from './headerOptions';
import {Welcome, Order} from '@screens';
import TabNavigator from './TabNavigator';
import type {Food} from '@models';

export type RootNavigatorParams = {
  [AppRoute.WELCOME_SCREEN]: undefined;
  [AppNavigators.TAB_NAVIGATOR]: undefined;
  [AppRoute.ORDER_SCREEN]: {foodItem: Food};
};

const RootStack = createNativeStackNavigator<RootNavigatorParams>();

const RootNavigator: FC = (): JSX.Element => {
  return (
    <RootStack.Navigator
      initialRouteName={AppRoute.WELCOME_SCREEN}
      screenOptions={ROOT_SCREEN_OPTIONS}>
      <RootStack.Screen
        name={AppRoute.WELCOME_SCREEN}
        component={Welcome}
        options={WELCOME_SCREEN_OPTIONS}
      />
      <RootStack.Screen
        name={AppNavigators.TAB_NAVIGATOR}
        component={TabNavigator}
        options={NO_HEADER_SCREEN_OPTIONS}
      />
      <RootStack.Screen
        name={AppRoute.ORDER_SCREEN}
        component={Order}
        options={ORDER_SCREEN_OPTIONS}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
