module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ['react-css-modules', {
      generateScopedName: '[name]__[local]',
      webpackHotModuleReloading: true,
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss',
        },
      },
    }]
  ],
}
