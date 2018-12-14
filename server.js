const express = require('express');
const app = express();
const path= require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const db = require('./utilities/util');


app.use(express.static(path.join(__dirname, 'public')));
const homePageRoute= require('./routes/homepage.js');
const loginPageRoute = require('./routes/login-page.js');
const userRoute = require('./routes/users');

const options = {
	host: 'localhost',
	port: 3306,
	user: 'session_test',
	password: 'password',
	database: 'session_test'
};

const sessionStore = new MySQLStore(options);



app.use(session({
  secret: 'bl2-;!!$-laaj@#/as',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  store: sessionStore
}));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(homePageRoute);
app.use(loginPageRoute);
app.use(userRoute);



app.use('/', (req, res, next)=>{
	res.render('404',{ 
		  path: '',
		  title: '404'
	    });
});


app.listen(3000);