const express= require('express');
const router = express.Router();
const path = require('path');


router.get('/',(req, res)=>{
	
	res.render('index', {
		path:'/',
		title: 'Home',
		isAuth: req.session.isAuth
	});
});


module.exports=router;