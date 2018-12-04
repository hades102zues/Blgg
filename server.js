const express = require('express');
const app = express();
const path= require('path');
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));


const homePageRoute= require('./routes/homepage.js');
const loginPageRoute = require('./routes/login-page.js');


app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(homePageRoute);
app.use(loginPageRoute);
app.use('/', (req, res, next)=>{
	res.render('404',{ 
		  path: '',
		  title: '404'
	    });
});

app.listen(3000);