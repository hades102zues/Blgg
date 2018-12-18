const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');
const isAuthMiddleWare = require('../utilities/auth');

router.get('/user/new-post', isAuthMiddleWare, userControllers.getNewPost);
router.post('/user/new-post', isAuthMiddleWare, userControllers.postNewPost);


router.get('/user/posts', isAuthMiddleWare, userControllers.getPosts);

router.get('/logout', isAuthMiddleWare, userControllers.getLogout);


module.exports= router;