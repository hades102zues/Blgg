module.exports=(req, res, next)=>{
	if(req.session.isAuth){ //if authenticated
		next(); //allow the request to continue
	}
	else{
		res.redirect('/');
	}
};