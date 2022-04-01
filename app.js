const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(3000);
    console.log('app connected to db and started at port 3000');
  })
  .catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {
  res.send('app OK');
});
