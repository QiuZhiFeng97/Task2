// lower case string
var str1 = "";

// uppercase string
var str2 = "";

var res = "";
for(let i = 0;i< 26;i++){
	str1 = str1.concat(String.fromCharCode('a'.charCodeAt(0) + i));
	str2 = str2.concat(String.fromCharCode('A'.charCodeAt(0) + i));
}

function output_reverse(str1,str2){
	for(let i = 0; i < 26; i++){
		res = res + str1[i] + str2[25 - i];
	}
	console.log(res);
}


output_reverse(str1,str2);
