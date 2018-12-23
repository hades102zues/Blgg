const express = require('express');
const router = express.Router();

const loginControllers = require('../controllers/login-page.js');
const { body } = require('express-validator/check');



router.get('/login', loginControllers.getLoginPage);
router.post('/login', loginControllers.postLoginPage);

router.get('/signup', loginControllers.getSignUpPage);


router.post('/signup',[
	body('email').isEmail(),
	body('password').isLength({min: 5}).withMessage('Password must be atleast 5 characters long')
], loginControllers.postSignUpPage);


module.exports=router;