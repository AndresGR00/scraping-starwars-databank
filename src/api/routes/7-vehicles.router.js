const router = require('express').Router();
const vehiclesController = require('../controllers/7-vehicles.controller');

router.post('/post-vehicles', vehiclesController.insertManyVehicles);
router.get('/', vehiclesController.getAllVehicles);

module.exports = router;
