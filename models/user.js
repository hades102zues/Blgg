const db = require('../ultilities/util');


class User {
	constructor({email, password}){
		this.email = email;
		this.pass= password;
	}

}

module.exports= User;