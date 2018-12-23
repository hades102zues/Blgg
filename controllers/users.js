const Post = require('../models/post.js');
//

exports.getNewPost = (req, res, next)=>{
	res.render('users/new-post', {
		title: 'New Post',
		path: '/user/new-post',
		
	});
};


exports.postNewPost = (req, res, next)=>{
	//create the post and return to the feed page
	Post.create(req, ()=>{
		res.redirect('/user/posts');
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

exports.getPost = (req, res, next)=>{
	Post.fetch(req, (post)=>{
		res.render('users/post',{
			title: 'Post',
			path: '/user/posts',
			userPost: post
		});
	});
};

exports.getEditPost = (req, res, next)=>{
	Post.fetch(req, (post)=>{
		res.render('users/edit-post',{
			title: 'Edit Post',
			path: '/user/posts',
			userPost: post
		});
	});
}
exports.postEditPost = (req, res, next)=>{
	Post.update(req, ()=>{
		res.redirect(`/user/posts/post/${req.params.postid}`);
	});

};

exports.getDeletePost = (req, res, next)=>{
	Post.delete(req, ()=>{
		res.redirect('/user/posts');
	});
};
exports.getLogout =(req,res, next)=>{
	req.session.destroy();
	res.redirect('/');
};