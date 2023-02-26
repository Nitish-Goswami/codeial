const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');

router.route('/me').get(users_controller.profile);

module.exports = router;