const router = require('express').Router();
const creatureController = require('../controllers/2-creatures.controller');

router.post('/post-creatures', creatureController.insertManyCreatures);
router.get('/', creatureController.getAllCreatures);

module.exports = router;
