const { Grocerie } = require('../models/grocerie');

async function groceries_post(req, res) {
  try {
    const grocerie = new Grocerie({
      name: req.body.name,
      expDate: new Date(req.body.expDate),
      amount: req.body.amount,
      user: req.body.user,
    });
    await grocerie.save();
    res.status(201).send(grocerie);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function groceries_get(req, res) {
  const user = req.query.user;
  try {
    const groceries = await Grocerie.find({ user: user });
    res.status(200).send(groceries);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function groceries_delete(req, res) {
  try {
    await Grocerie.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(204).send(error);
  }
}

async function groceries_put(req, res) {
  try {
    await Grocerie.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        expDate: new Date(req.body.expDate),
        amount: req.body.amount,
      }
    );
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  groceries_post,
  groceries_get,
  groceries_delete,
  groceries_put,
};
