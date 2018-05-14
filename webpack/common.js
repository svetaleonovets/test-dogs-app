const join = require('path').join;

module.exports = {
  output: {
    path: join(__dirname, '../public/assets'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      join(__dirname, '../node_modules'),
      join(__dirname, '../src'),
    ],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    }],
  },
};
