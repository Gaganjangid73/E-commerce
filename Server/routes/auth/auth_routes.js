const express = require('express');
const router = express.Router();
const { registeruser } = require('../../controllers/auth/auth_controller');

router.post('/signup', registeruser);

module.exports = router;