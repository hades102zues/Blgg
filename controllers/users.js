exports.getNewPost = (req, res, next)=>{
	res.render('users/new-post', {
		title: 'New Post',
		path: '/user/new-post',
		isAuth: req.session.isAuth
	});
};


exports.postNewPost = (req, res, next)=>{
	res.redirect('/');
};

exports.getPosts = (req, res, next)=>{
	res.render('users/posts', {
		title: 'Posts',
		path: '/user/posts',
		isAuth: req.session.isAuth
	});
};


exports.getLogout =(req,res, next)=>{
	req.session.destroy();
	res.redirect('/');
};