const db = require('../utilities/util');



module.exports = class Post {


	static create(req, cb){

		db('posts').insert({
			email: req.session.email,
			title:req.body.title,
			description: req.body.description,
			imageurl: req.body.imageurl
		})
		.then(()=>{ cb() });
	}

	static fetch(req, cb){
		db('posts').select().where({
			email:req.session.email,
			postid: req.params.postid
		})
		.then((rows)=>{
				cb(rows);
		}).catch(err=>console.log(err));
	}

	static fetchAll(req, cb){
		db('posts').select().where({
			email:req.session.email
		})
		.then((rows)=>{
			if (rows.length){
				cb(rows);
			}else{
				cb([])
			}

		}).catch(err=>console.log(err));
	}

	static update(req, cb){

		db('posts').update({
			title:req.body.title,
			description: req.body.description,
			imageurl: req.body.imageurl
		})
		.where({
			postid:req.params.postid
		})
		.then(()=>{cb()});
	}

}