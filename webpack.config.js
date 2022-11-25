import { DefinePlugin } from 'webpack'
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }]
      },
      { test: /\.css$/, use: [{ loader: 'css-loader' }] }
    ]
  }
}
