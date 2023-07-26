import {withTiming} from 'react-native-reanimated';

const addressBannerAnimation = (): any => {
  'worklet';
  const animations = {
    transform: [{translateY: withTiming(0, {duration: 700})}],
    opacity: withTiming(1, {duration: 700}),
  };
  const initialValues = {
    transform: [{translateY: -80}],
    opacity: 0,
  };
  return {
    initialValues,
    animations,
  };
};

const discountBannerAnimation = (): any => {
  'worklet';
  const animations = {
    transform: [{translateY: withTiming(0, {duration: 500})}],
    opacity: withTiming(1, {duration: 700}),
  };
  const initialValues = {
    transform: [{translateY: 20}],
    opacity: 0,
  };
  return {
    initialValues,
    animations,
  };
};

const orderListAnimation = (): any => {
  'worklet';
  const animations = {
    transform: [{translateY: withTiming(0, {duration: 700})}],
    opacity: withTiming(1, {duration: 700}),
  };
  const initialValues = {
    transform: [{translateY: 20}],
    opacity: 0,
  };
  return {
    initialValues,
    animations,
  };
};

export {addressBannerAnimation, discountBannerAnimation, orderListAnimation};
