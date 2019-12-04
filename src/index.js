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

app.get('/user/:id', function(req, res) {
  let result = users.find(obj => {
    if (obj.id === req.params.id) {
      return obj;
    } else {
      return {};
    }
  });
  res.json(result);
});

app.listen(3000, () => {
  console.log('Server is running');
});