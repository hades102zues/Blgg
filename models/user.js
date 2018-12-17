const db = require('../utilities/util');
const bcrypt = require('bcrypt');
const users = 'users';


class User {
	
	static save({fullname, email, password}){	
       
        this.fetch(email, (row)=>{

        	if(row.length){ //if the array is not empty then ..
        		console.log('already exsts');
        	}else{
        		//add the user to the db
        		bcrypt.hash(password, 10).then( hash => {
					db(users).insert({
						name: fullname,
						email: email,
						password: hash
					})
					.then();
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