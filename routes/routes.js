const { Router } = require('express');
const { checkUser } = require('../middleware/checkUser');
const groceriesController = require('../controllers/groceriesController');
const recipesController = require('../controllers/recipesControllers');
const authController = require('../controllers/authController');

const router = Router();

router.post('/groceries', checkUser, groceriesController.groceries_post);
router.get('/groceries', checkUser, groceriesController.groceries_get);
// prettier-ignore
router.delete('/groceries/:id', checkUser, groceriesController.groceries_delete);
router.put('/groceries/:id', checkUser, groceriesController.groceries_put);

router.post('/recipes', checkUser, recipesController.recipes_post);
router.get('/recipes', recipesController.recipes_get);
router.delete('/recipes/:id', checkUser, recipesController.recipes_delete);
router.put('/recipes/:id', checkUser, recipesController.recipes_put);
router.get('/recipes-me', checkUser, recipesController.recipes_me_get);

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

module.exports = router;
