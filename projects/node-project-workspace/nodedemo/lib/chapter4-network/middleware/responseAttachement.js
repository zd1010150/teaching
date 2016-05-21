/**
 * 响应附件下载的请求
 */
var fs=require("fs");
var mime=require("mime");
var path=require("path");
var FILES_BASE_PATH="../../../files";
/**
 * 响应文件的处理方法
 * @param filePath 文件路径
 */
exports.sendFile=function(req,res,fileName){
    var filePath=path.join(FILES_BASE_PATH,fileName);
    fs.stat(filePath,function(err,stat){
        var stream=fs.createReadStream(filePath);
        res.setHeader('Content-Type',mime.lookup(filePath));
        res.setHeader('Content-Deposition','attachment;filename="'+path.basename(filePath)+'"');
        res.setHeader('Content-Length',stat.size);
        res.writeHead(200);
        stream.pipe(res);
    });
};
/**
 * 响应JSON字符串给浏览器
 * @param jsonObj
 */
exports.sendJSON=function(jsonObj){

};
/**
 * 重定向的url
 * @param url
 */
exports.sendRedirect=function(url){

};
