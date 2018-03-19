<?php
function getPrimeArray($max){
	$arr = array_fill(0,$max,true);
	$arr[0] = $arr[1] = false;	
	for($i = 2; $i * $i <= $max; $i++){
		if($arr[$i]){
			for($j = 2 * $i; $j <= $max; $j += $i){
				$arr[$j] = false;
			}
		}
	}
	
	return $arr;
}

$arr = getPrimeArray(1000);
$file = fopen("8-thousandPrime.txt","w");
foreach($arr as $key => $val){
	if($key == 0) continue;
	$key = strval($key);
	if($val){
		$key = $key . " -I'm Prime";
	} 
	$key = $key . "\n";
	echo $key;
	fwrite($file,$key);
}


?>
