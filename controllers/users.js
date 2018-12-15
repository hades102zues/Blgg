exports.getNewPost = (req, res, next)=>{
	res.render('users/new-post', {
		title: 'New Post',
		path: '/user/new-post',
		isAuth: req.session.isAuth
	});
};


exports.postNewPost = (req, res, next)=>{
	console.log(req.body);
	res.redirect('/');
};

exports.getPosts = (req, res, next)=>{
	console.log('POSTS', req.session.isAuth);
	res.render('users/posts', {
		title: 'Posts',
		path: '/user/posts',
		isAuth: req.session.isAuth
	});
};


exports.getLogout = (req, res, next)=>{
	//unset the auth session
	res.redirect('/');
}