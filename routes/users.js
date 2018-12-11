const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.get('/user/new-post', userControllers.getNewPost);
router.post('/user/new-post', userControllers.postNewPost);


module.exports= router;