<?php
function formatNum($num,$length){
	$lengthOfNum = strlen(strval($num));
	while($lengthOfNum < $length){
		$num = "0" . strval($num);
		$lengthOfNum++;
	}
	return $num;
}

$file = fopen("millionF.txt","w");
for($i = 1; $i <= 1000000; $i++){
	$data = formatNum($i,7) . "\n";
	echo "loading ----$i \n";
	fwrite($file,$data);
}

?>
