var Paylane = require('./lib/paylane.js');
var test = new Paylane('username', 'password');

var payments = test.api;
var Sale = test.sale;


var testSale = new test.Sale();
testSale.setAmount(21.20);
testSale.setCurrency('PLN');
testSale.setDescription('xxx');

var customer = new test.Customer();
customer.setEmail('asd@asd.pl');
customer.setIp('1.1.1.1');
customer.setAddress({
  street_house: 'Agrestowa 1',
  city: 'Warsaw',
  state: 'Mazowieckie',
  zip: '12-100',
  country_code: 'PL'
});

var card = new test.Card();

card.setData({
  card_number: "4111111111111111",
  expiration_month: "03",
  expiration_year: "2017",
  name_on_card: "John Doe",
  card_code: "123"
});

payments.cardSale({
  sale: testSale,
  customer: customer,
  card: card
});
