module.exports = function () {
  return {
    card_number: null,
    expiration_month: null,
    expiration_year: null,
    name_on_card: null,
    card_code: null,

    setData: function (data) {
      this.card_number = data.card_number;
      this.expiration_month = data.expiration_month;
      this.expiration_year = data.expiration_year;
      this.name_on_card = data.name_on_card;
      this.card_code = data.card_code;
    },

    setCardNumber: function (card_number) {
      this.card_number = card_number;
    },

    setExpirationMonth: function (expiration_month) {
      this.expiration_month = expiration_month;
    },

    setNameOnCard: function (name_on_card) {
      this.name_on_card = name_on_card;
    },

    setCardCode: function (card_code) {
      this.card_code = card_code;
    }
  };
};
