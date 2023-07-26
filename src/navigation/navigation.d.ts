import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootNavigatorParams} from './RootNavigator';
import type {HomeNavigatorParams} from './HomeNavigator';
import type {SettingsNavigatorParams} from './HomeNavigator';
import {AppRoute} from './routes';

declare global {
  type WelcomeProps = NativeStackScreenProps<
    RootNavigatorParams,
    AppRoute.WELCOME_SCREEN
  >;

  type OrderProps = NativeStackScreenProps<
    RootNavigatorParams,
    AppRoute.ORDER_SCREEN
  >;

  type HomeProps = NativeStackScreenProps<
    HomeNavigatorParams,
    AppRoute.HOME_SCREEN
  >;

  type SettingsProps = NativeStackScreenProps<
    SettingsNavigatorParams,
    AppRoute.SETTINGS_SCREEN
  >;
}
