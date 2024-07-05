module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          api: './src/api',
          constants: './src/constants',
          screens: './src/screens',
          assets: './src/assets',
          components: './src/components',
          locales: './src/locales',
          utils: './src/utils',
          types: './src/types',
        },
      },
    ],
  ],
};
