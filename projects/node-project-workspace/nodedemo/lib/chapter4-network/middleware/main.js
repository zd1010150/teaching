var http = require("http");
var url = require("url");
var app = require("./router");

http.createServer(function (req, res) {
    var pathname = url.parse(req.url, true).pathname;

}).listen("9999");
var match = function (path) {
    var routers = app.routers;
    routers.forEach(function (i, r) {
        var reg = r.regPath;
        var paramKeys = r.paramKeyArr;
        var stack = r.stack;
        var matched = reg.exec(path);
        var params = {};
        if (matched) {
            for (var i = 0, len = paramKeys.length; i < len; i++) {
                var value = matched[i + 1];
                params[paramKeys.name] = value;
            }
        }
        req.params = params;
        handle(req, res, stack);
    });
};
var handle = function (req, res, stack) {

    var next = function (err, req, res) {
        if (err) {
            return handle500(err, req, res, stack);
        }
        var middleware = stack.shift();
        if (middleware) {
            middleware(req, res, next);
        }
    };
    next(req, res);
};
var handle500 = function (err, req, res, stack) {
    stack = stack.filter(function (i, m) {
        return m.length == 4;
    });
    var next=function(err,req,res,next){
      var middleware=next.shift();
        if(middleware){
            middleware(err,req,res,next);
        }
    };
    next();
};