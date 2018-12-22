const Post = require('../models/post.js');

exports.getNewPost = (req, res, next)=>{
	res.render('users/new-post', {
		title: 'New Post',
		path: '/user/new-post',
		
	});
};


exports.postNewPost = (req, res, next)=>{
	//create the post and return to the feed page
	Post.create(req, ()=>{
		res.render('users/posts', {
			title: 'Posts',
			path: '/user/posts',
		});
	});
};

exports.getPosts = (req, res, next)=>{
	Post.fetchAll(req, (posts)=>{
		res.render('users/posts', {
			title: 'Posts',
			path: '/user/posts',
			userPosts: posts
		});
	});
	
};


exports.getLogout =(req,res, next)=>{
	req.session.destroy();
	res.redirect('/');
};