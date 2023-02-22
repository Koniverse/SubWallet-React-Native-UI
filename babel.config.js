const path = require('path')
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'import',
        {
          libraryName: '@ant-design/react-native',
          customName: (name) => {
            return path.resolve(__dirname, `./components/${name}`)
          },
        },
      ],
      [
        'formatjs',
        {
          idInterpolationPattern: '[sha512:contenthash:base64:6]',
          ast: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
