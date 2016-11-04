const express = require('express');
const app = express();
const InstagramController = require('./controllers/instagram');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/users/:userId/recent', InstagramController.getRecent);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});