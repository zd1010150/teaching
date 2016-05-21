var http=require("http");

var router=require("./router");
var parseBody=require("./parseBody");

http.createServer(function(req,res){
    router.route(req,res);
    // console.log("----",req.url);
    // console.log('%o',req.headers);
    // parseBody.parseBody(req,res,function(req,res){
    //     console.log("***",req.rawBody);
    //     res.writeHead(200,{'Content-Type':'text/plain'});
    //     res.end('hello,world');
    // });
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('hello,world');

}).listen(8888);