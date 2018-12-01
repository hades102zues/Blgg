const express = require('express');
const app = express();
const path= require('path');


const homepageRoute= require('./routes/homepage.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homepageRoute);
app.use('/', (req, res, next)=>{
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);