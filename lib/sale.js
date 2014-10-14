module.exports = function () {
  return {
    amount: null,
    currency: null,
    description: null,

    setAmount: function (amount) {
      this.amount = amount;
    },

    setCurrency: function (currency) {
      this.currency = currency;
    },

    setDescription: function (description) {
      this.description = description;
    },

    getAmount: function () {
      return this.amount;
    },

    getCurrency: function () {
      return this.currency;
    },

    getDescription: function () {
      return this.description;
    }
  }
}
