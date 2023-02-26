const express = require('express');
const app = express();
const port = 4000;

app.set('view-engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err) console.log(`Error : ${err}`);
    console.log('Server is running on port ',port);
})
