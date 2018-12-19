const User = require('../models/user');//import class USer
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator/check');


exports.getLoginPage= (req, res, next)=>{
	res.render('login',{
		title: 'Login',
		path: '/login',	
		error: req.flash('loginErr')
	});
};

exports.postLoginPage = (req, res, next)=>{
	User.fetch(req.body.email, (row)=>{
		if(row.length){//user exists
			//test to make sure password is correct
			bcrypt.compare(req.body.password, row[0].password)
			.then(result=>{ //boolean
					if(result){ //match was succesful
						req.session.isAuth=true;
						req.session.email = req.body.email;
						req.session.save(()=>{
							res.redirect('/user/posts');
						})
					}
					else{
						console.log('incorrect password');
						req.flash('loginErr','Incorrect Password or Email');
						res.render('login',{
							title: 'Login',
							path: '/login',
							error: req.flash('loginErr')
						});
					}
			});
			
		}else{ //user doesnt exist
			console.log('user does not exist');
			req.flash('loginErr', 'Incorrect Password or Email');
			res.render('login',{
				title: 'Login',
				path: '/login',
				error: req.flash('loginErr')
				

			});
		}
	});
};

exports.getSignUpPage= (req, res, next)=>{
	res.render('signup',{
		title: 'Signup',
		path: '/signup',
		error: req.flash('signupErr'),
		valErrs: []

	});
};

exports.postSignUpPage = (req, res, next)=>{
	const valErrs = validationResult(req);

	//if valerr then render sign up with valErrs passed
	//else create the user
	User.create(req, res, (row)=>{

	        	if(row.length){ //if the array is not empty then ..
	        		req.flash('signupErr', 'User With That Email Already Exists');
	        		console.log('user already exsts');
	        		res.render('signup',{
						title: 'Signup',
						path: '/signup',
						error: req.flash('signupErr')
						
					});
	        	}else{
	        		//add the user to the db
	        		bcrypt.hash(req.body.password, 10).then( hash => {
						db(users).insert({
							name: req.body.fullname,
							email: req.body.email,
							password: hash
						})
						.then(()=>{ 
							req.session.isAuth=true;
							req.session.email = req.body.email;
							req.session.save(()=>{
								res.redirect('/user/posts');
							})
						})//execute middleware commands
						.catch(err => console.log('inserting into db: ', err));
					});
	        	}
    });
		
};