const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (req, res) => {
  const id_num = req.params.id;
  res.send(`Payment methods for cart ${id_num}`);
});
app.get('/available_payments', (_req, res) => {
  res.json({payment_methods: {credit_cards: true, paypal: false}});
});
app.post('/login', (req, res) => {
  let user = '';
  if (req.body) {
    user = req.body.user;
  }
  res.send(`Welcome ${user}`);
});
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
module.exports = app;
