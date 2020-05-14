const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const findEntryPoints = require('./utils/findEntryPoints');

const entryPoints = findEntryPoints();

let entry = {};
let htmlPlugins = [];

// Заполняем точки входа и подключаем HtmlWebpackPlugin с шаблонами
for (point of entryPoints) {
  entry[point] = path.resolve(process.cwd(), 'src', `${point}.js`);
  htmlPlugins.push(new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), 'src', 'templates', `${point}.html`),
    filename: `${point}.html`,
    favicon: path.resolve(process.cwd(), 'src', 'assets', 'favicon.png'),
    inject: true, // Подключает js и css в html без лишних действий
    chunks: [ point ] // Выбирает только нужные чанки (иначе подключаются все)
  }));
}

module.exports = {
  entry,
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: '3.6.5'
                }
              ]
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[chunkhash].[ext]',
              outputPath: 'images'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              gifsicle: {
                interlaced: false,
              },
              svgo: {
                cleanupAttrs: true,
                convertPathData: true
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff(2)?)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'vendor'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  plugins: [
    ...htmlPlugins,
    new WebpackMd5Hash()
  ]
};
