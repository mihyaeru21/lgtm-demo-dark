var fetch = require('isomorphic-fetch');

module.exports = function() {
  return fetch('https://lgtm.in/g', {
    headers: { Accept: 'application/json' }
  }).then(function(res) {
    return res.url;
  });
};

