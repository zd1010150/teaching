var fs=require("fs");

module.exports.readFiles=files => {
	var result=[];
	files.forEach((index,file,array) => {
		fs.readFile(file,(err,file) => {
			result.push(file);
		});
	});
}