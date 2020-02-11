const webpackMerge = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // css 压缩
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base');

const ssrConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: '/.css$/',
        use: 'ignore-loader',
      },
      {
        test: '/.less$/',
        use: 'ignore-loader',
      },
    ],
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10
        // },
        commons: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = webpackMerge(baseConfig, ssrConfig);
