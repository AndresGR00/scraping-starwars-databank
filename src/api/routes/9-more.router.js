const router = require('express').Router();
const moreController = require('../controllers/9-more.controller');

router.post('/post-more', moreController.insertManyMore);
router.get('/', moreController.getAllMore);

module.exports = router;
