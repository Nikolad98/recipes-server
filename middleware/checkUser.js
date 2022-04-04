const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

async function checkUser(req, res, next) {
  const token = req.cookies.recipeIdToken;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).send('access denied');
      } else {
        next();
      }
    });
  } else {
    res.status(401).send('access denied');
  }
}

module.exports = { checkUser };
