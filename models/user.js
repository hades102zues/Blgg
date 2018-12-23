const db = require('../utilities/util');
const bcrypt = require('bcrypt');
const users = 'users';


class User {
	
	static create(req, res, cb){	
        this.fetch(req.body.email, cb);
	}

	static fetch(em, cb){
		 db(users).select().where({email : em})
		 .then(cb)
		 .catch(err=>console.log('fetch from db :', err));
	}

}

module.exports= User;