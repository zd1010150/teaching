//一来一个npm 包 npm install path-to-regexp --save
var pathRegExp=require("path-to-regexp");
var routers={
    all:[],
    put:[],
    delete:[],
    get:[],
    post:[]
};
var app={};
//
var regPath=function(path){};
routers.forEach(function(i,m){
    app[m]=function(path){
        var paramKeyArr=[];
        var tempt={
            regPath:pathRegExp(path,paramKeyArr),
            paramKeyArr:paramKeyArr,
            stack:Array.prototype.slice.call(arguments,1)
        };
        routers[m].push(tempt);
    };
});
exports.app=app;
exports.routers=routers;
