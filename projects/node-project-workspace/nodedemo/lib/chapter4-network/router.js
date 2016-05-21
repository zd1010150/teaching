var url=require("url");
var formidable=require("./formidable");
var fs=require("fs");
var path=require("path");
var PAGE_BASE_PATH="../../pages";
function loadFile(filename,next){
    fs.readFile(path.join(PAGE_BASE_PATH,filename),function(error,data){
        next(error,data);
    });
}
function handleAction(req,res,next){
    formidable.formidable(req,res,function(err,req,res){
        if(err){
            next(err,'error');
        }else{
            next(null,'success');
        }
        
    });
    console.log("form handle");
    
}
exports.route=function(req,res,next){
    var urlObj=url.parse(req.url,true),
        pathname=urlObj.pathname;
    if(/^[^\.]*\.html$/i.test(pathname)){
        var filename=/^(.*\.html)$/i.exec(pathname)[0];
        loadFile(filename,function(err,filedata){
            if(err){
                res.writeHead(404,{'Content-Type':'text/plain'});
                res.end('error');
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(filedata);
            }

        });
    }else if(/^[^\.]*\.do$/i.test(pathname)){
        var action=/^[^\.]*\.do$/i.exec(pathname)[0];
        handleAction(req,res,function(error,result){
            if(error){
                res.writeHead(501,{'Content-Type':'text/plain'});
                res.end(result);
            }else{
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end(result);
            }
        });

    }

};