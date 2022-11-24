const { config } = require('@storybook/addon-actions')

module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../stories/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-a11y'
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  env: (config) => ({
    ...config,
    MapboxAccessToken: process.env.MAPBOX_TOKEN
  })
}
