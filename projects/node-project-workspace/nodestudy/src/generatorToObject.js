/**
 * add generator interface to object
 */
'use strict'
function * generatorObject(obj){
    var keys=Reflect.ownKeys(obj);
    console.log(typeof keys);
    for(var key of keys){
      yield [key,obj[key]]
    }
}
var obj={username:"zhang dan",gender:"female"};
for(let [key ,value] of generatorObject(obj) ){
    console.log(`${key},${value}`);
}
