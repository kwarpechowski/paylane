module.exports = function () {
  return {
    name: null,
    email: null,
    ip: null,
    address: {
      street_house: null,
      city: null,
      state: null,
      zip: null,
      country_code: null
    },

    setEmail: function (email) {
      this.email = email;
    },

    setIp: function (ip) {
      this.ip = ip;
    },

    setAddress: function (address) {
      this.address = address;
    },

    setStreetHouse: function (street_house) {
      this.address.street_house = street_house;
    },

    setCity: function (city) {
      this.address.city = city;
    },

    setState: function (state) {
      this.address.state = state;
    },

    setZip: function (zip) {
      this.address.zip = zip;
    },

    setCountryCode: function (country_code) {
      this.address.country_code = country_code;
    }

  };
};
