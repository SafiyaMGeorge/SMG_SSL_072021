"use strict"
const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const express =require("express");
const request =require("request");
const bodyParser =require("body-parser");

let ejs = require("ejs");
const router = express.Router();
let app = express();
let eformat = !/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/;
let pformat =!/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const session = require("express-session");
app.use(session({secret:"secret", saveUninitialized:true,resave:true}));
let sess;

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);


//routes via ejs
router.get("/",function(req,res){
    sess =req.session;
    res.render("index",{pagename:"Home",sess:sess});
});

router.get("/about",function(req,res){
    sess =req.session;
    res.render("about",{pagename:"About",sess:sess});
});
//Login function
router.get("/profile",function(req,res){
    sess = req.session;
    if(typeof(sess)=="undefined"||sess.loggedin !=true){
        let errors = ["Not an authenticated user"];
        res.render("index", {pagename:"Home", errors:errors})
    }else{
        res.render("profile", {pagename:"Profile", sess:sess})
    }
})
//logout function
router.get("/logout",function(req,res){
    sess=req.session;
    sess.destroy(function(err){
        res.redirect("/");
    })
})

router.post("/login",function(req,res){
    let errors=[];
    //email and password validations
    if(res.body.email ==""){
        errors.push("Email is required")
    }
    if(res.body.password ==""){
        errors.push("Password is required")
    }
    //format validations
    if(eformat.test(rep.body.email)){
        errors.push("Email is not valid")
    }

    if(pformat.test(rep.body.password)){
        errors.push("Password is not valid")
    }
    //authentication
    if(res.body.email =="Mike@aol.com"){
        errors.push("Email is incorrect")
    }
    if(res.body.password =="abc123"){
        errors.push("Password is incorrect")
    }

    sess = req.session;
    if(sess.loggedin = true){
        res.render("index",{pagename:"Profile",sess:sess});
    }else{
        res.render("index",{pagename:"Home",errors:errors});
    }
    
    
});
    //contact form validations

router.post("/contact", function(re1,res){
    let fError =[];
    if(res.body.firstName ==""){
        errors.push("This field is required")
    }
    if(res.body.lastName ==""){
        errors.push("This field is required")
    }
    if(res.body.address ==""){
        errors.push("This field is required")
    }
    if(res.body.city ==""){
        errors.push("This field is required")
    }
    if(res.body.state ==""){
        errors.push("This field is required")
    }
    if(res.body.zip ==""){
        errors.push("This field is required")
    }
    if(res.body.age ==""){
        errors.push("This field is required")
    }
    if(res.body.gender ==""){
        errors.push("This field is required")
    }
    if(res.body.consent ==""){
        errors.push("This field is required")
    }
    if(res.body.bio ==""){
        errors.push("This field is required")
    }
});
app.use(express.static("public"))
app.use("/", router);
let server = app.listen("8080");