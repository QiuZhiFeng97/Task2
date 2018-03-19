<?php

$file = fopen("million.txt","w");
for($i = 1; $i <= 1000000; $i++){
	fwrite($file,strval($i) . "\n");
	echo "writing $i \n";
}
?>
