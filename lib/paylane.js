var request = require('request');

module.exports = function (username, password) {
  return {
    api_url: 'direct.paylane.com/rest/',

    http_errors: {
        400: '400 Bad Request',
        401: '401 Unauthorized',
        500: '500 Internal Server Error',
        501: '501 Not Implemented',
        502: '502 Bad Gateway',
        503: '503 Service Unavailable',
        504: '504 Gateway Timeout'
    },

    is_success: false,
    ssl_verify: true,

    allowed_request_methods: [
        'get',
        'put',
        'post',
        'delete'
    ],

    setUrl: function (url) {
      this.api_url = url;
    },

    setSSLverify: function (ssl_verify) {
      this.ssl_verify = ssl_verify;
    },

    getUrl: function (url) {
      return ['https://', username, ':', password, '@', this.api_url, url].join('');
    },

    isSuccess: function () {
      return this.is_success;
    },

    cardSale: function (params) {
      return this.call('cards/sale', 'POST', params);
    },

    call: function (url, method, params) {
      this.is_success = false;

      request({url: this.getUrl(url), method: method}, function (error, response, body) {
        console.log(body, response.statusCode);
      });
    },
    

    test: function() {
      return username + " " + password;
    }

  };
}