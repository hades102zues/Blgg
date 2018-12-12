exports.getNewPost = (req, res, next)=>{
	res.render('users/new-post', {
		title: 'New Post',
		path: '/user/new-post'
	});
};


exports.postNewPost = (req, res, next)=>{
	console.log(req.body);
	res.redirect('/');
};

exports.getPosts = (req, res, next)=>{
	res.render('users/posts', {
		title: 'Posts',
		path: '/user/posts'
	});
};


exports.getLogout = (req, res, next)=>{
	res.redirect('/');
}