/*exports的值因为是否是值类型而决定了是否会被改变*/
'use strict';
var counter=1;
var inCounter=() => {
	counter++;
	console.log("incounter",counter);
}
var getCounter=() => {
	return counter;
}
module.exports={
	counter:counter,
	inCounter:inCounter,
	getCounter:getCounter
};