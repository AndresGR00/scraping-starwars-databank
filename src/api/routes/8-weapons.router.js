const router = require('express').Router();
const weaponsController = require('../controllers/8-weapons.controller');

router.post('/post-weapons', weaponsController.insertManyWeapons);
router.get('/', weaponsController.getAllWeapons);

module.exports = router;
