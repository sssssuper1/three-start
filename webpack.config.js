const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: [{
      loader: 'ts-loader',
      options: {
        happyPackMode: true,
        transpileOnly: true,
        compilerOptions: {
          noEmit: false,
          module: 'esnext',
          target: 'es2017',
        },
      },
    }]}],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devtool: 'inline-source-map',
};