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

	static fetch(){

	}

	static fetchAll(req, cb){
		db('posts').select().where({
			email:req.session.email
		})
		.then((rows)=>{
			cb(rows);
		});
	}

}