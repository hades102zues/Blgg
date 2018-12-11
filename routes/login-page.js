const express = require('express');
const router = express.Router();

const loginControllers = require('../controllers/login-page.js');



router.get('/login', loginControllers.getLoginPage);
router.post('/login', loginControllers.postLoginPage);

router.get('/signup', loginControllers.getSignUpPage);
router.post('/signup', loginControllers.postSignUpPage);


module.exports=router;