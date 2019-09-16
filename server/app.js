var express = require("express");
const app=express();
const path=require("path");

var bodyparser=require("body-parser");

var userrouter=require("./Routes/userrouter");

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

app.use("/users",userrouter);

app.listen(process.env.PORT || 8080,function(req,res)
{
    console.log("Server started listening.");
})
