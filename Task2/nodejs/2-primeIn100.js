// the number which is devided by another number
var devidend;

var num;

// 牛顿迭代法（Newton's method）   can get Math.squart(num)
// f(x2) = x1 - f(x1)/f'(x1)
// 切线近似切点附近的曲线，仅需几次迭代后可得到平方根的近似解

function Newton_squart(num){
	// x can be a random num at first time
	x = 3.0;
	var res = x/2 + num/(x * 2);
	
	// precision
	var precision = 0.000000000001;
	while(Math.abs(res * res - num) > precision) res = res/2 + num/(res * 2);
	return res;
}

function Mod_function(){
	for(num=2;num<=100;num++){
		var isPrime = true;
	
		// if a number is prime,it can be devidend by a integer less than squart(num)
		for(devidend=2;devidend<=Newton_squart(num);devidend++){
			if(num % devidend === 0) isPrime = false;
		}
		if(isPrime) console.log(num);
	}
}

// 空间复杂度高，时间复杂度底
function filter_function(){
	var max = 100;
	var prime = Array(max).fill(true);
	prime[0] = prime[1] = false;
	for(let i = 2; i * i <=max;i++){
		
		// 避免重复
		if(prime[i]){
			for(let j = i+ i; j<=max;j+=i){
				prime[j] = false;	
			}
		}
	}
	
	// output
	for(let i = 2;i<100;i++){
		if(prime[i]) console.log(i);
	}

}

filter_function();

