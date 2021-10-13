module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          navigation: './src/navigation',
          components: './src/components',
          assets: './assets',
          interfaces: './src/interfaces',
          hooks: './src/hooks',
          context: './src/context',
          screens: './src/screens',
          api: './src/api',
          utils: './src/utils',
        },
      },
    ],
  ],
};
