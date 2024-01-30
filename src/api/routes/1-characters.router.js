const router = require('express').Router();
const characterController = require('../controllers/1-character.controller');

router.post('/post-characters', characterController.insertManyCharacters);
router.get('/', characterController.getAllCharacters);

module.exports = router;
