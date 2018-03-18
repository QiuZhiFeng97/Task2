// lower case string
var str1 = [];

// uppercase string
var str2 = [];

var res = "";
for(let i = 0;i< 26;i++){
	str1.push(String.fromCharCode('a'.charCodeAt(0) + i));
	str2.push(String.fromCharCode('A'.charCodeAt(0) + i));
}

function output_reverse(str1,str2){
	str2 = str2.reverse();
	for(let i = 0;i<26;i++){
		res += str1.shift() + str2.shift();
	}
	console.log(res);
}


output_reverse(str1,str2);
