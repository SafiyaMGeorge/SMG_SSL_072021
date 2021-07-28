const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

http.createServer(function(req,res){

        var parsed = url.parse(req.url);
        var filename = path.parse(parsed.pathname);
        let filen = filename.name;

    fs.readFile("index.html",function(err,data){

        res.writeHead(200);
        res.end(data);
    });

}).listen("8080")