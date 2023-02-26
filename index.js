const express = require('express');
const app = express();
const port = 4000;
const ejs_layouts = require('express-ejs-layouts');
const db = require('./config/mongoose');



// Set Up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(ejs_layouts);
// Extract style and scripts from ejs pages
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Define Static Resource
app.use(express.static('./assets'));



app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err) console.log(`Error : ${err}`);
    console.log('Server is running on port ',port);
})
