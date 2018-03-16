<?php

$str1 = "";
$str2 = "";
$res = "";

for($i = 0; $i < 26; $i++){
	$str1 = $str1 . chr(ord('a') + $i);
	$str2 = $str2 . chr(ord('A') + $i);
}

for($j = 0; $j < 26; $j++){
	$res = $res . $str1[$j] . $str2[25 - $j];
}

echo $res;
?>
