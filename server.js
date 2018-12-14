const express = require('express');
const app = express();
const path= require('path');
const bodyParser = require('body-parser');
const session = require('express-session');



app.use(express.static(path.join(path.dirname(process.mainModule.filename), 'public')));


const homePageRoute= require('./routes/homepage.js');
const loginPageRoute = require('./routes/login-page.js');
const userRoute = require('./routes/users');


const db = require('./utilities/util');

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

db.select().from('user').then(rows=>{
	console.log(rows);
});
app.listen(3000);