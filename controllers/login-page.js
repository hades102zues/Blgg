const User = require('../models/user');//import class USer



exports.getLoginPage= (req, res, next)=>{
	res.render('login',{
		title: 'Login',
		path: '/login',
		
	});
};

exports.postLoginPage = (req, res, next)=>{
	User.fetch(req.body.email, (row)=>{
		if(row.length){//user exists
			//test to make sure password is correct
			req.session.isAuth=true;
				req.session.save(()=>{
					res.redirect('/user/posts');
			});	
		}else{ //user doesnt exist
			console.log('user does not exist');
			res.render('login',{
				title: 'Login',
				path: '/login',
			});
		}
	});
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