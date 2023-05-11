const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

module.exports = router;
