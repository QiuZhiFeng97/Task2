<?php

for($i = 2; $i <= 100; $i++){
	$isPrime = true;
	for($j = 2; $j <= sqrt($i); $j++){
		if($i % $j == 0) $isPrime = false;
	}
	if($isPrime){
	echo $i;
	echo "\n";
	}
	
}


?>
