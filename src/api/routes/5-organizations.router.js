const router = require('express').Router();
const organizationsController = require('../controllers/5-organizations.controller');

router.post('/post-organizations', organizationsController.insertManyOrganizations);
router.get('/', organizationsController.getAllOrganizations);

module.exports = router;
