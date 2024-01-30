const router = require('express').Router();
const speciesController = require('../controllers/6-species.controller');

router.post('/post-species', speciesController.insertManySpecies);
router.get('/', speciesController.getAllSpecies);

module.exports = router;
