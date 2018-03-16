<?php

for($i = 0; $i < 8; $i++){
	//总共8个数字供选择
	$arr = [1,2,3,4,6,7,8,9];
	$x1 = $arr[$i];
	$x9 = 10 - $x1;
	array_splice($arr,array_search($x1,$arr),1);
	array_splice($arr,array_search($x9,$arr),1);

	//总共6个数字可供选择	
	for($j = 0; $j < count($arr);$j++){
		$arr2 =  $arr;
		$x2 = $arr2[$j];
		$x8 = 10 - $x2;
		array_splice($arr2,array_search($x2,$arr2),1);
		array_splice($arr2,array_search($x8,$arr2),1);
	
		//总共4个数字可供选择
		for($k = 0; $k < count($arr2);$k++){
			$arr3 =  $arr2;
			$x3 = $arr3[$k];
			$x7 = 10 - $x3;
			array_splice($arr3,array_search($x3,$arr3),1);
			array_splice($arr3,array_search($x7,$arr3),1);
			
			//总共2个数字可供选择
			for($m = 0; $m < count($arr3); $m++){
				$arr4 = $arr3;			
				$x4 = $arr4[$m];
				$x6 = 10 - $x4;
				if((($x1+$x2+$x3)==15) && (($x1+$x4+10-$x3)==15)){
					print_r([[$x1,$x2,$x3],[$x4,5,$x6],[$x7,$x8,$x9]]);
				}
			}
		}

	}
}


?>
