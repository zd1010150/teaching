var formidable=require('formidable');
var mime=require('./mime');
var FILE_UPLOAD_PATH="../../files";
module.exports.formidable=function(req,res,next){
    if(mime.mime(req) === 'multipart/form-data'){
        var form=formidable.IncomingForm();
        form.uploadDir=FILE_UPLOAD_PATH;
        form.keepExtensions = false;
        form.parse(req,function(err,fileds,files){
            req.body=fileds;
            req.files=files;
            next(err,req,res);
        });
    }else{
        next(null,req,res);
    }
};