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
  },
  plugins: [
    new DefinePlugin({
      'process.env.MapboxAccessToken': 'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYWswOXk4MDAwemszb3Iwd25qeDk1NjUifQ.dt716pE63lESHEgKz3_MZA'
    })
  ]
}
