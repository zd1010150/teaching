var path=require("path");
var fs=require("fs");

function travelDirectorySync(dir,callback){
	fs.readdirSync(dir).forEach(function(file){
		var pathname=path.join(dir,file);
		if(fs.statSync(pathname).isDirectory()){
			travelDirectorySync(pathname,callback);
		}else{
			callback(file);
		}
	});
}
// travelDirectory(path.normalize("../"),function(file){
// 	console.log(file);
// });

function travelDirectory(dir,callback){
	fs.readdir(dir,(err,files) => {
			files.forEach( (file,index,array) =>{
				var pathname=path.join(dir,file);
				fs.stat(pathname,(err,stat) =>{
					if(stat.isDirectory()){
						travelDirectory(pathname,callback);	
					}else{
						callback(pathname);
					}
				})
			});
	});
}

travelDirectory(path.normalize("../"),function(file){
	console.log(file);
});