const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.get('/user/new-post', userControllers.getNewPost);
router.post('/user/new-post', userControllers.postNewPost);


router.get('/user/posts', userControllers.getPosts);

router.get('/logout', userControllers.getLogout);


module.exports= router;