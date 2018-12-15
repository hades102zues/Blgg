const db = require('../utilities/util');
const users = 'users';


class User {
	
	static save({fullname, email, password}){
		
		db('users').insert({email, password}).catch(err=>console.log(err));
		
	}

	static fetch(em){
		db(users).select().where({email : em})
		.then( row=>{ //[..]
			if(row){
				return true;
			}else{
				return false;
			}
		});
	}

}

module.exports= User;