exports.mime=function(req){
	var type=req.headers["content-type"] || '';
	return type.split(";")[0];
}