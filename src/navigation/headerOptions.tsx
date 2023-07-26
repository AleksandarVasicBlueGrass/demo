import React from 'react';
import {DMHeader} from '@molecules';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const NO_HEADER_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const WELCOME_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarStyle: 'dark',
};

const HOME_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  statusBarStyle: 'light',
  header: () => <DMHeader />,
};

const ORDER_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarStyle: 'light',
};

const ROOT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  animation: 'fade',
  animationDuration: 700,
};

export {
  WELCOME_SCREEN_OPTIONS,
  HOME_SCREEN_OPTIONS,
  ORDER_SCREEN_OPTIONS,
  NO_HEADER_SCREEN_OPTIONS,
  ROOT_SCREEN_OPTIONS,
};
