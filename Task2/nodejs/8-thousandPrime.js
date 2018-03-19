var writeStream = require("./writeStream");
function filterFunction(max){
	var arr = Array(max).fill(true);
	arr[0] = arr[1] = false;
	for(let i = 2; i * i <= max; i++){
		if(arr[i]){
			for(let j = 2 * i; j <= max;j += i){
				arr[j] = false;
			}
		}
	}
	return arr;
}

var arr = filterFunction(1000);
var data = "";
writeStream = new writeStream();

arr.forEach(function(isPrime,index){
	if(isPrime){
		console.log(index + " -I'm Prime");
		data += index + " -I'm Prime" + "\n";
	}
	else{
		console.log(index);
		data += index + "\n";
	}

});


writeStream.writeDataToFile(data,"8-thousandPrime.txt");

