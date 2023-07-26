import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoute} from './routes';
import {HOME_SCREEN_OPTIONS} from './headerOptions';
import {Home} from '@screens';
import type {Food} from '@models';

export type HomeNavigatorParams = {
  [AppRoute.HOME_SCREEN]: undefined;
  [AppRoute.ORDER_SCREEN]: {foodItem: Food};
};

const HomeStack = createNativeStackNavigator<HomeNavigatorParams>();

const HomeNavigator: FC = (): JSX.Element => {
  return (
    <HomeStack.Navigator initialRouteName={AppRoute.HOME_SCREEN}>
      <HomeStack.Screen
        name={AppRoute.HOME_SCREEN}
        component={Home}
        options={HOME_SCREEN_OPTIONS}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
