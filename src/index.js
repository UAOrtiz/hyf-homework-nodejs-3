const express = require('express');
app = express();
let users = [];

app.get('/', (req, res) => {
  res.json('Hello World!')
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', function(req, res) {
  users = [{
    id: 0
  }];
  res.json({
    StatusCode: 200,
    body: users[users.length - 1],
  });
});

app.get('/users', function(req, res) {
  if (users.length === 0) {
    res.json([{
      id: 0
    }]);
  } else {
    res.json([users[users.length - 1]]);
  }
});

app.listen(3000, () => {
  console.log('Server is running');
});