var express=require("express");
const router=express.Router();
var path=require('path');
var bodyparser = require("body-parser");

var mongoose = require("mongoose");
var url="mongodb://localhost/project";

var user=require("../model/usermodel"); 
var login=require("../model/loginmodel")

router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,{ useNewUrlParser: true },function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected..");
})

var multer=require("multer");

var storage =   multer.diskStorage({  
    destination: (req, file, callback)=>{  
      callback(null, './public/docs');  
    },  
    filename: (req, file, callback)=>{  
      callback(null, file.originalname);  
    }  
  });  

  var upload = multer({storage : storage}).single('udoc'); 

router.post('/adduser', upload, function(req,res)
{
    var u1 = new user();
    var l1= new login();
    u1.uname = req.body.uname;
    u1.email = req.body.email;
    l1.email =req.body.email;
    u1.mobno = req.body.mobno;
    u1.pswd = req.body.pswd;
    l1.pswd = req.body.pswd;
    u1.location = req.body.location;
    u1.resume = req.file.filename;
    u1.utype="jobseeker";
    l1.utype="jobseeker";
    u1.save((err)=>{
        if (err) throw err;
        else
        {
            console.log("User Added.");
            res.redirect("/");
        }
    })
})


module.exports=router;