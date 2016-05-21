function * clock(){
    while(true){
        console.log('ticking');
        yield;
        console.log('tocking');
        yield;
    }
}
var c=clock();
for(var t=0;t<4;t++){
    c.next();
}
