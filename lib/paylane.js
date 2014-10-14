var API = require('./api.js');

module.exports = function (username, password) {
  return {
    api: new API(username, password),
    Sale: require('./sale.js'),
    Customer: require('./customer.js'),
    Card: require('./card.js')
  };
};
