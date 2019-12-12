const path = require('path')

const pathToApp = path.resolve(__dirname, '../packages/weather/src')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  context: pathToApp,
  entry: ['@babel/polyfill', pathToApp],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader', exclude: /node_modules/, },
      {
        test: /\.(css|scss)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader?localIdentName=[name]__[local]&modules=true&sourceMap',
          'postcss-loader?sourceMap'
        ],
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin(({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false,
  }))],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
  },
}

module.exports = config
