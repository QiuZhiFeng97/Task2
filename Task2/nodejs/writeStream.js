var fs = require("fs");
function writeStream(){
	this.writeDataToFile = function(data,filename){
		var writerStream = fs.createWriteStream(filename);
		writerStream.write(data,"UTF8");
	
		writerStream.end();
	
		writerStream.on("finish",function(){
			console.log("data writed to file: "+filename+"successfully!");
		});
	
		writerStream.on("error",function(){
			console.log("data writed to file:"+filename+"faild reason:");
		});
	};
};

module.exports = writeStream;

