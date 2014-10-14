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

    renderError: function (object) {
      console.log(object);
    },

    call: function (url, method, params) {
      var _this = this;

      this.is_success = false;

      request({url: this.getUrl(url), method: method, json: true, body: params}, function (error, response, body) {
        if (!body.success) {
          _this.renderError(body.error);
        } else if (response.statusCode > 200 ){
          _this.renderError({
            code: response.statusCode,
            name: _this.http_errors[response.statusCode]
          });
        } else {
          console.log(body);
        }
      });
    }
  };
}
