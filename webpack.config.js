const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getPlugins = (argv) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ]

  if (argv.mode === 'production') {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      })
    )
  }
  return plugins
}

const getDevConfig = () => {
  return {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
}

module.exports = (env, argv) => {
  const config = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            argv.mode !== 'production'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
  }
  config.devServer = getDevConfig()
  config.plugins = getPlugins(argv)

  return config
}
