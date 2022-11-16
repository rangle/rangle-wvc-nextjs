const { config } = require("@storybook/addon-actions");

module.exports = {
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
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  env: (config) => ({
    ...config,
    MapboxAccessToken: 'pk.eyJ1IjoiZS1zY2h1bHR6IiwiYSI6ImNsYWswOXk4MDAwemszb3Iwd25qeDk1NjUifQ.dt716pE63lESHEgKz3_MZA'
  })

}
