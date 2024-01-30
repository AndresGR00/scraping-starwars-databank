const router = require('express').Router();
const droidController = require('../controllers/3-droids.controller');

router.post('/post-droids', droidController.insertManyDroids);
router.get('/', droidController.getAllDroids);

module.exports = router;
