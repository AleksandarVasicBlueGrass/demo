module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@assets': './src/assets',
          '@icons': './assets/icons',
          '@images': './assets/images',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@models': './src/models',
          '@mocks': './mocks',
          '@lib': './src/lib',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@actions': './src/store/actions',
          '@reducers': './src/store/reducers',
          '@selectors': './src/store/selectors',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
