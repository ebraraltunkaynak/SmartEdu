const express = require('express');
const authController = require('../controllers/authControllers');


const router = express.Router();

router.route('/signup').post(authController.createUser); //localhost/users/signup

module.exports = router;