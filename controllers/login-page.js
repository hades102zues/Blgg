const User = require('../models/user');//import class USer

exports.getLoginPage= (req, res, next)=>{
	res.render('login',{
		title: 'Login',
		path: '/login'
	});
};

exports.postLoginPage = (req, res, next)=>{
	const data = req.body; //get user data
	console.log(req.body);
	res.redirect('/');
};

exports.getSignUpPage= (req, res, next)=>{
	res.render('signup',{
		title: 'Signup',
		path: '/signup'
	});
};

exports.postSignUpPage = (req, res, next)=>{
	User.save(req.body);
	res.redirect('/');
};