const path = require('path');

module.exports = {
 sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
 },
 env: {
  AUTH0_NAMEPSPACE: 'http://localhost:3000/roles',
 },
};
