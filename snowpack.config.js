// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  testOptions: {
    files: ['./src/**/*.spec.jsx'],
  },
  mount: {
    /* ... */
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-postcss"
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  mount: {
    public: '/',
    src: '/dist',
  },
  env: {
    /* ... */
  }
}
