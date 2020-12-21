const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  if ( (env.NODE_ENV === "development") && (env.development) )
  {
    console.log('Сборка для отладки');

    return {
        entry: {
            index: './src/index.js',
            print: './src/print.js'
        },
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            open: true,
            compress: true,
            hot: true,
            port: 9000
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new HtmlWebpackPlugin({
                title: 'Development'
            })
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
                }
            ]
        }
      };
  }
  else
  {
    return {
        entry: {
            index: './src/index.js',
            print: './src/print.js'
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new HtmlWebpackPlugin({
                title: 'Development'
            })
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
                }
            ]
        }
      };
  }

  
};

/* module.exports = env => {
    console.log('env: ', env);
    // console.log('NODE_ENV: ', process.env.NODE_ENV); // local
    // console.log('Production: ', process.env.production); // true

    return {
        // mode: process.env.NODE_ENV,
        // mode: 'development',
        // mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        entry: './src/index.js',
        // devtool: 'inline-source-map',
        devtool: NodeEnvPlugin.devtool,
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            open: true,
            compress: true,
            hot: true,
            port: 9000
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new HtmlWebpackPlugin({
                title: 'Development'
            }),
            new NodeEnvPlugin()
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
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
                }
            ]
        }
    }
}; */

/* module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', ////Не понял, как в итоге запускать разные окружения. Посл. изменение по инструкции из https://habr.com/ru/post/514838/
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            open: true,
            compress: true,
            hot: true,
            port: 9000
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            }
        ]
    }
}; */