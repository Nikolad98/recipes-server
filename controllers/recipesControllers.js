const { Recipe } = require('../models/recipe');

async function recipes_post(req, res) {
  try {
    const recipe = new Recipe({
      title: req.body.title,
      subtitle: req.body.subtitle,
      groceries: req.body.groceries,
      workflow: req.body.workflow,
      time: req.body.time,
      difficulty: req.body.difficulty,
      user: req.body.user,
    });
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function recipes_get(req, res) {
  try {
    const recipes = await Recipe.find();
    res.status(200).send(recipes);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function recipes_me_get(req, res) {
  const user = req.query.user;
  try {
    const recipes = await Recipe.find({ user: user });
    res.status(200).send(recipes);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function recipes_delete(req, res) {
  try {
    await Recipe.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(204).send(error);
  }
}

async function recipes_put(req, res) {
  try {
    await Recipe.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        subtitle: req.body.subtitle,
        groceries: req.body.groceries,
        workflow: req.body.workflow,
        time: req.body.time,
        difficulty: req.body.difficulty,
      }
    );
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  recipes_post,
  recipes_get,
  recipes_delete,
  recipes_put,
  recipes_me_get,
};
