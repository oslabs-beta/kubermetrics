const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './client/src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    // static: {
    publicPath: "/build/",
      // contentBase: './build',
    // },
    
    proxy: {
      '/': 'http://localhost:3000',
    },
  }
};
