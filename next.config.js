/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        MapboxAccessToken: process.env.MAPBOX_TOKEN
      })
    )
    return config
  }
}

module.exports = nextConfig
