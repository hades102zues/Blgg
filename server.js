const express = require('express');
const app = express();
const path= require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const homepageRoute= require('./routes/homepage.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homepageRoute);
app.use('/', (req, res, next)=>{
	res.render('404', {path: ''});
});

app.listen(3000);