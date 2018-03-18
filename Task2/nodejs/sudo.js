
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


// 递归实现
// @param arr 将九宫格放在arr[0]至arr[8];
// @param pos 数组下标
function recursion(arr,pos){
	//条件满足时，打印结果
	if(pos===9 && (arr[0]+arr[4]+arr[8]===15) && (arr[6]+arr[7]+arr[8]===15) &&(arr[2]+arr[4]+arr[6]===15)){
		console.log(arr)
	}
	else{
		// arr[pos] = i
		//若当前数填 1 到 9 都无法满足，则前一位数 加 1
		for(let i = 1;i <= 9; i++){
			var isCompleted = true;

			for(let j = 0; j < pos;j++){
				if(arr[j]===i){ 
					isCompleted = false;
					break;
				}
			}
			
			// 到第二行时，保证第一行相加为15
			// 到第三行时，保证第二行相加为15
			// pos = 6,7,8时。保证其所在的列相等	
			if((pos===3 && arr[0] + arr[1] + arr[2] !== 15) || (pos===6 && arr[3]+arr[4]+arr[5]!== 15) || (pos===7 && arr[0]+arr[3]+arr[6] !== 15) || (pos===8 && arr[1] + arr[4] + arr[7] !== 15)) isCompleted = false;
		
			if(isCompleted){
				arr[pos] = i;
				recursion(arr,pos+1);
			}
	

		}
	}

}

var arr = [0,0,0,0,0,0,0,0,0];
recursion(arr,0);

