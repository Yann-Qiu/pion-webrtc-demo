const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: [".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './index.html'), // template file
          filename: 'index.html', // output file
          NODE_ENV: process.env.NODE_ENV,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, './dist'),
      },
      port: 9090,
    }
};
