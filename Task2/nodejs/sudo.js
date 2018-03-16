
function res(){

	for(var i = 0; i < 8; i++){
		//总共8个数字供选择
		var arr = [1,2,3,4,6,7,8,9];
		var x1 = arr[i];
		var x9 = 10 - x1;
		arr.splice(arr.indexOf(x1),1);
		arr.splice(arr.indexOf(x9),1);
		
		//总共6个数字供选择
		for(var j = 0; j < arr.length;j++){
			var arr2 = arr.map(function(val){return val});
			var x2 = arr2[j];
			var x8 = 10 - x2;	
			arr2.splice(arr2.indexOf(x2),1);
			arr2.splice(arr2.indexOf(x8),1);
			
			//总共4个数字供选择
			for(var k = 0; k < arr2.length; k++){
				var arr3 = arr2.map(function(val){return val});
				var x3 = arr3[k];
				var x7 = 10 - x3;
				arr3.splice(arr3.indexOf(x3),1);
				arr3.splice(arr3.indexOf(x7),1);
			
				////总共2个数字供选择
				for(var m = 0; m < arr3.length; m++){
					var arr4 = arr3.map(function(val){return val});
					var x4 = arr4[m];
					var x6 = 10 - x4;
					if(((x1+x2+x3)===15) && ((x1+x4+10-x3)===15)) console.log([[x1,x2,x3],[x4,5,x6],[x7,x8,x9]]);
				}
			}
		}
	}
}


res();
