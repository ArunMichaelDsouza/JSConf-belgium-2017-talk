import index from './index'; // Loaded synchronously

require.ensure(['./about.js'], function (require) {
  require('./about'); // Loaded asynchronously
});