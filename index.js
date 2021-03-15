const express = require("express");
const pug = require("pug");

const homepage = require("./models/hompage.router")

const app = express();
const port = process.env.PORT || 3000;
//pug config
app.set('view engine', 'pug');
app.set("views","./views");
//static file (css,jvs,scss,...)
app.use(express.static('public'));
//
app.use('/',homepage);
//
app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
});