var arr = [{'benz-S800':80},{'bmw-X7':90},{'maybach':120},{'lada':10}];


arr.forEach(function(element){
	var carName = Object.getOwnPropertyNames(element)[0];
	if(element[carName] < 95) console.log(carName);
});
