const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(3000);
    console.log('app connected to db and started at port 3000');
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/api', routes);
