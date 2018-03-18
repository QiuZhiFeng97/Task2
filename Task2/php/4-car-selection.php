<?php

$arr = array('benz-S800'=>80,'bmw-X7'=>90,'maybach'=>120,'lada'=>10);
/*
$carNames = array_keys($arr);
forEach($carNames as $carName){
	if($arr[$carName] < 95){
 	echo $carName;
	echo "\n";
	}
}
*/
$filtered = array_filter($arr,function($val,$key){
	return $val < 95;

},ARRAY_FILTER_USE_BOTH);
var_dump($filtered);
?>
