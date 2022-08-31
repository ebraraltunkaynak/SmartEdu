const express = require('express');

const authController = require('../controllers/authControllers');
const authMiddleware    =require('../middlewares/authMiddleware')
const User = require ('../models/User')
const { body } = require('express-validator');
const router = express.Router();

router.route('/signup').post(
    [
     body('name').not().isEmpty().withMessage('please enter your name'),
     body('email').not().isEmpty().withMessage('please enter your email')

    .custom((userEmail)=>{
        return User.findOne({email:userEmail }).then(user=>{
            if(user) {
                return Promise.reject('Email is already Exists')
            }
        })

    }),

     body('password').not().isEmpty().withMessage('please enter your password'),
    ],

    authController.createUser); //http://localhost:3000/user/signup
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.LogoutUser);
router.route('/dashboard').get(authMiddleware,authController.getDashboardPage);   //users/dashboard

module.exports = router;
