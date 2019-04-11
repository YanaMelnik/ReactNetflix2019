const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
  },
};
