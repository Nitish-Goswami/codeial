const express = require('express');
const router = express.Router();
const users_controller = require('../controllers/users_controller');

router.route('/me').get(users_controller.profile);
router.get('/register',users_controller.register);
router.get('/login',users_controller.login);

router.post('/create',users_controller.create);
router.post('/create-session',users_controller.createSession);

module.exports = router;