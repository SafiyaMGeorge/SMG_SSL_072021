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
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);


//routes via ejs
router.get("/",function(req,res){

    res.render("index",{pagename:"Home"});
});

router.get("/about",function(req,res){
    
    res.render("about",{pagename:"About"});
});

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
    res.render("index",{pagename:"Home"});
});

router.post("/contact", function(re1,res){
    //form validations
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