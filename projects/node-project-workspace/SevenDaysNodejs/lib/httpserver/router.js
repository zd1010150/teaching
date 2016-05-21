var url=require("url");

function index(req,res){
    console.log("index");
}
function form(req,res){
    console.log("form");
    
}
exports.route=function(req,res){
    var urlObj=url.parse(req.url,true);
    switch (urlObj.pathname){
        case '/':
            index(req,res);
            break;
        case '/form':
            form(req,res);
            break;
        default:
            break;

    }
};