var koa=require("koa");
var app=koa();
app.use(function * (next){
    var start=new Date();
    yield next;
    var last=new Date-start;
    this.set("response-time",last)
});
app.use(function * (next){
    var start=new Date();
    yield next;
    var last=new Date-start;
    console.log("url:%s,method:%s,start :%s,last: %s",this.url,this.method,start,last);
});
app.use(function *(){
    this.body="hello,world";
    this.cookie.set('name','dandan',{signed:true});
});
app.listen("3000");
