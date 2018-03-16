var x1,x2,x3,x4,x5,x6,x7,x8,x9;

//此方法为最为直观暴力的解法，后有推导简化，详见../prove.jpg. 代码实现见 sudo.js
for(x1=1;x1<=9;x1++){
	for(x2=1;x2<=9;x2++){
		if(x2 === x1) continue;
		for(x3=1;x3<=9;x3++){
			if(x3=== x2 || x3 ===x1) continue;
			for(x4=1;x4<=9;x4++){
				if(x4 === x3 || x4===x2 || x4 === x1) continue;
				for(x5=1;x5<=9;x5++){
					if(x5 === x4 || x5 === x3 || x5 === x2 || x5=== x1) continue;
					for(x6=1;x6<=9;x6++){
						if(x6 === x5 || x6 === x4 || x6 === x3 || x6=== x2 || x6===x1) continue;
						for(x7=1;x7<=9;x7++){
							if(x7===x6 || x7===x5 || x7===x4 || x7===x3 || x7 ===x2 || x7 ===x1) continue;
							for(x8=1;x8<=9;x8++){
								if(x8===x7 || x8 === x6 || x8 === x5 || x8 === x4 || x8 === x3 || x8 === x2 || x8 === x1) continue;
								for(x9 =1;x9<=9;x9++){
									if(x9 === x8 || x9 === x7 || x9 === x6 || x9 === x5 || x9 === x4 || x9 === x3 || x9 === x2 || x9 === x1) continue;
									if(((x1+ x2 + x3) === (x4 + x5 + x6)) && ((x1+x2+x3)===(x7+x8+x9)) && ((x1 + x9) === (x3 + x7)) && ((x1+x4+x7)===(x2+x5+x8)) && ((x1+x4+x7)===(x3+x6+x9))){
										console.log([[x1,x2,x3],[x4,x5,x6],[x7,x8,x9]]);
									}
								}
							}
						}
					}
				}
			}
		}
	}





}
