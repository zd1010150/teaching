var hasBody=function(req){
    return 'Content-Length' in req.headers || 'Transfer-Encoding' in req.headers;
}
exports.parseBody=function(req,res,handle){
    if(hasBody(req)){
        var buffer=[];
        req.on('data',function(chunk){
            buffer.push(chunk);
        });
        req.on('end',function(){
            req.rawBody=Buffer.concat(buffer).toString();
            handle(req,res);
        });
    }else{
       handle(req,res); 
    }
};
