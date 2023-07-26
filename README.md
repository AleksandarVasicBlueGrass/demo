This is a [**Demo**](https://www.figma.com/file/VBCRrX50FuBxxxz2FJceNq/) project done for interview purposes using [**React Native**](https://reactnative.dev).

# Requirements

**Xcode** Version 14.3.1 <br />
**Node** Version 20.3.1 <br />
**Yarn** Version 1.22.19 <br />

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn install

yarn android
```

### For iOS

```bash
yarn install

cd ios && pod install

yarn ios
```

# Architecture

The project architecture is based on a folder structure, utilizing the [**Atomic Design**](https://bradfrost.com/blog/post/atomic-web-design/) methodology for organizing components

# Libraries

## State management:

1. [`react-redux`](https://react-redux.js.org/introduction/getting-started) is a library used for state management
2. [`@reduxjs/toolkit`](https://redux-toolkit.js.org/introduction/getting-started) is a library that streamlines the usage of Redux and reduces boilerplate code
3. [`redux-persist`](https://www.npmjs.com/package/redux-persist) is used for persisting and rehydrating the Redux store
4. [`redux-thunk`](https://handsonreact.com/docs/redux-thunk) is middleware for Redux that enables asynchronous actions
5. [`react-native-mmkv`](https://www.npmjs.com/package/react-native-mmkv) is used for efficient and high-performance data storage in React Native applications

## Navigation:

1. [`react-native-screens`](https://www.npmjs.com/package/react-native-screens) is used to optimize screen transitions and enhance the performance of React Native applications by using native views and components for rendering screens
2. [`@react-navigation/native`](https://reactnavigation.org/docs/getting-started/) is used for creating navigation in React Native applications
3. [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator) is used to create a stack navigator in React Native
4. [`@react-navigation/bottom-tabs`](https://reactnavigation.org/docs/bottom-tab-navigator) is used to create a tab navigator with tabs positioned at the bottom of the screen

## Other:

1. [`react-native-community/blur`](https://www.npmjs.com/package/@react-native-community/blur) is used for applying blur effects inside RN apps
2. [`moment`](https://momentjs.com/) is a JavaScript library used for manipulating and formatting dates and times
3. [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/) is a powerful and performant library used for creating complex and smooth animations in React Native applications
4. [`react-native-modal`](https://www.npmjs.com/package/react-native-modal/) is a library used for creating modals in React Native applications
5. [`react-native-safe-area-context`](https://www.npmjs.com/package/react-native-safe-area-context) is a library used for handling safe area insets in React Native applications
6. [`react-native-svg`](https://www.npmjs.com/package/react-native-svg) is a library used for rendering scalable vector graphics (SVG) in React Native application
