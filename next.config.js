// next.config.js
const withTM = require('next-transpile-modules')(['easy-typer-js']); // pass the modules you would like to see transpiled
const path = require('path');

module.exports = withTM({
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
});
