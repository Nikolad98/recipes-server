const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

const handleError = (err) => {
  let error = '';

  if (err.code === 11000) {
    error = 'that email is already in use';
    return error;
  }

  if (err.message) {
    error = err.message;
  }
  return error;
};

const maxAge = 15 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

async function signup_post(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).send('user created');
  } catch (err) {
    const error = handleError(err);
    res.status(404).json({ error });
  }
}

async function login_post(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('recipeIdToken', token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });
    res.status(201).json({ user: user.email });
  } catch (err) {
    const error = handleError(err);
    res.status(404).json({ error });
  }
}

function logout_get(req, res) {
  res.cookie('recipeIdToken', '', { httpOnly: true, maxAge: 1 });
  res.status(200).json('user loged out');
}

module.exports = { signup_post, login_post, logout_get };
