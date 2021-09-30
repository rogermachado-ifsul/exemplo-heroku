const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use( express.static("public") );

app.get('/',function(req,res){
    res.render('index.ejs');
});

app.get('/create',function(req,res){
    res.render('create.ejs');
});

app.listen(process.env.PORT || 3000);