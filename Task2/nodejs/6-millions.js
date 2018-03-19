var writeStream = require("./writeStream");
var data = ""; 
for(let i = 1; i <= 1000000; i++){
	data += String(i) + "\n";
}

writeStream = new writeStream();
writeStream.writeDataToFile(data,"million.txt");


