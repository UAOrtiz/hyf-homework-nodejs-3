const express = require('express');
app = express();
let users = [];

app.get('/', (req, res) => {
  res.json('Hello World!')
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/user', function(req, res) {
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
    if (obj.id == req.params.id) {
      return obj;
    } else {
      return {};
    }
  });
  res.json(result);
});

app.delete('/user/:id', (req, res) => {
  if (users.length > 0) {
    let result = users.find(obj => {
      if (obj.id == req.params.id) {
        users.splice(users.findIndex(({
          id
        }) => id == req.params.id), 1);
        res.sendStatus(202);
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    res.sendStatus(204);
  }

});

app.get('/users', function(req, res) {
  let result = users.find(obj => {
    if (obj.id == req.params.id) {
      return obj;
    } else {
      return [];
    }
  });
  res.json({
    StatusCode: 200,
    body: result
  });
});

app.listen(3000, () => {
  console.log('Server is running');
});