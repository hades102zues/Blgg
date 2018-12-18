const db = require('../utilities/util');



module.exports = class Post {


	static save(req, handler){
		db('posts').insert({
			email: req.session.email,
			title:req.body.title,
			description: req.body.description,
			imageurl: req.body.imageurl
		})
		.then(()=>{ handler() });
	}

	static fetch(){

	}

	static fetchAll(req, handler){
		db('posts').select().where({
			email:req.session.email
		})
		.then(()=>{
			handler();
		});
	}

}