const User = require('../models/user');//import class USer



exports.getLoginPage= (req, res, next)=>{
	res.render('login',{
		title: 'Login',
		path: '/login',
		isAuth: req.session.isAuth
	});
};

exports.postLoginPage = (req, res, next)=>{
	//find email in db
	//if found set req.session.isAuth=true
	res.redirect('/user/posts');
};

exports.getSignUpPage= (req, res, next)=>{
	res.render('signup',{
		title: 'Signup',
		path: '/signup',
		isAuth: req.session.isAuth
	});
};

exports.postSignUpPage = (req, res, next)=>{
	User.save(req.body);//save to db
	req.session.isAuth=true;
	req.session.save(()=>{
		res.redirect('/user/posts');
	});
	
	
};