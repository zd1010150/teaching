/*exports的值因为是否是值类型而决定了是否会被改变*/
let counter=1;
let inCounter=() => {
	counter++;
	console.log("incounter",counter);
};
let getCounter=() => {
	return counter;
};
export {
	counter,inCounter,getCounter
};