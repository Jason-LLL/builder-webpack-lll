
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 打包分离
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpacklPlugin = require('html-webpack-plugin'); // html 压缩
const glob = require('glob');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const autoprefixer = require('autoprefixer');

const projectRoot = process.cwd();

const setMPA = () => {
  const entry = {};
  const htmlWebpacklPlugins = [];

  const entryFiles = glob.sync(path.join(projectRoot, './src/*/index.js'));
  console.log(entryFiles);
  Object.keys(entryFiles).map((index) => {
    console.log(index);
    const entryFile = entryFiles[index];
    // console.log(entryFile);
    const matchArray = entryFile.match(/src\/(.*)\/index\.js/);
    // console.log(matchArray);
    const pageName = matchArray && matchArray[1];
    entry[pageName] = entryFile;

    return htmlWebpacklPlugins.push(
      new HtmlWebpacklPlugin({
        template: path.join(projectRoot, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ['common', pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }),
    );
  });

  return {
    entry,
    htmlWebpacklPlugins,
  };
};

const { entry, htmlWebpacklPlugins } = setMPA();

module.exports = {
  entry,
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: '[name]_[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ], // css-loader转css为commonjs 对象    style-loader将样式通过《style》😊插入head中
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8]_[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ].concat(htmlWebpacklPlugins),
};
