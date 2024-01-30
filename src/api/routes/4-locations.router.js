const router = require('express').Router();
const locationController = require('../controllers/4-locations.controller');

router.post('/post-locations', locationController.insertManyLocations);
router.get('/', locationController.getAllLocations);

module.exports = router;
