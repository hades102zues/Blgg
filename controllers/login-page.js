const User = require('../models/user');//import class USer



exports.getLoginPage= (req, res, next)=>{
	res.render('login',{
		title: 'Login',
		path: '/login',
		
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
		
	});
};

exports.postSignUpPage = (req, res, next)=>{
	User.save(req, res, ()=>{
				req.session.isAuth=true;
				req.session.save(()=>{
					res.redirect('/user/posts');
			  	});	
			});
};