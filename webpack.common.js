const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* const ExtractTextPlugin = require('extract-text-webpack-plugin'); */

module.exports = {
    entry: {
        index: './src/index.js'
        // print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'app',
        }),
        /* new ExtractTextPlugin('style.css') */
        /* new HtmlWebpackPlugin({
            inject: false,
            templateContent: ({htmlWebpackPlugin}) => `
              <html>
                <head>
                  <title>App</title>
                  ${htmlWebpackPlugin.tags.headTags}
                </head>
                <body>
                  <section id="sct"></section>
                  ${htmlWebpackPlugin.tags.bodyTags}
                </body>
              </html>
            `
          }) */
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.json5$/,
                loader: 'json5-loader',
                options: {
                    esModule: false
                },
                type: 'javascript/auto'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            /* {
                test: /\.less$/,
                // loader: 'less-loader'
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true
                            }
                        }
                    }
                ]
            } */
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    }
}