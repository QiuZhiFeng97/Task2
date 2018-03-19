var writeStream = require("./writeStream");

function formatNum(num,length){
	var lengthOfNum = num.toString().length;
	while(lengthOfNum < length){
		num = "0" + num;
		lengthOfNum++;
	}
	return num;
}


// make data
var data = "";
for(let i = 1; i <= 1000000;i++){
	data += formatNum(i,7) + "\n";
}

writeStream = new writeStream();

// write to file
writeStream.writeDataToFile(data,"millionF.txt");


