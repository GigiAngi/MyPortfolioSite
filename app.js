var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT || 4000, process.env.IP || "", function(){
    console.log("A Portfolio Site Server elindult");
});