const User = require('../models/user');//import class USer
const bcrypt = require('bcrypt');



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
			bcrypt.compare(req.body.password, row[0].password)
			.then(result=>{ //boolean
					if(result){ //match was succesful
						req.session.isAuth=true;
						req.session.save(()=>{
							res.redirect('/user/posts');
						})
					}
					else{
						console.log('incorrect password');
						res.render('login',{
							title: 'Login',
							path: '/login',
						});
					}
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
	User.create(req, res, (row)=>{

	        	if(row.length){ //if the array is not empty then ..
	        		console.log('user already exsts');
	        		res.render('signup',{
						title: 'Signup',
						path: '/signup',
						
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
							req.session.save(()=>{
								res.redirect('/user/posts');
							})
						})//execute middleware commands
						.catch(err => console.log('inserting into db: ', err));
					});
	        	}
	     });
		
};