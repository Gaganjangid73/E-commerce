const express = require('express');
const router = express.Router();
const { registeruser, login } = require('../../controllers/auth/auth_controller');

router.post('/signup', registeruser);
router.post('/login', login);

module.exports = router;