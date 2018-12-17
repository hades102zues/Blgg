const db = require('../utilities/util');
const bcrypt = require('bcrypt');
const users = 'users';


class User {
	
	static save(req, res, handler){	
       
        this.fetch(req.body.email, (row)=>{

        	if(row.length){ //if the array is not empty then ..
        		console.log('user already exsts');
        	}else{
        		//add the user to the db
        		bcrypt.hash(req.body.password, 10).then( hash => {
					db(users).insert({
						name: req.body.fullname,
						email: req.body.email,
						password: hash
					})
					.then(()=>{ handler() })//execute middleware commands
					.catch(err => console.log('inserting into db: ', err));
				});
        	}
        });
		
	}

	static fetch(em, cb){
		 db(users).select().where({email : em})
		 .then(cb)
		 .catch(err=>console.log('fetch from db :', err));
	}

}

module.exports= User;