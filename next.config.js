const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
 sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
 },
 webpack: (config) => {
  config.resolve.alias['@'] = path.resolve(__dirname);
  config.plugins.push(new Dotenv({ silent: true }));
  return config;
 },
 env: {
  AUTH0_NAMEPSPACE: 'http://localhost:3000/roles',
 },
};
