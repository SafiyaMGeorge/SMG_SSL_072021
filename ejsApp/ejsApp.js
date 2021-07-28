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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);


//routes via ejs
router.get("/",function(req,res){

    res.render("index",{pagename:"Home"});
})

router.get("/about",function(req,res){
    
    res.render("about",{pagename:"About"});
})


app.use(express.static("public"))
app.use("/", router);
let server = app.listen("8080");