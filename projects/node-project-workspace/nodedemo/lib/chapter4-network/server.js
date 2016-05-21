var http=require("http");

var router=require("./router");
var parseBody=require("./parseBody");

http.createServer(function(req,res){
    parseBody.parseBody(req,res,function(req,res){
        router.route(req,res,function(req,res){
            console.log("server handle is over");
        });
    });
}).listen(8888);