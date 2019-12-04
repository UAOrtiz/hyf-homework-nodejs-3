const express = require('express');
app = express();
let users = [];

app.get('/', (req, res) => {
  res.json('Hello World!')
});

app.get('/users', () => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running');
});