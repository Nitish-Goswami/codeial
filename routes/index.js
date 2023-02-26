const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/home_controller');

router.route('/').get(home_controller.home);
// User Router
router.use('/users',require('./user'));

module.exports = router;