import index from './index'; // Loaded synchronously

setTimeout(() => {
  require.ensure(['./about.js'], function (require) {
    require('./about'); // Loaded asynchronously
  });
}, 4000);