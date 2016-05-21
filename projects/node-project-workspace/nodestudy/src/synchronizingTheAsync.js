function * makeRequest(){
    var result=yield makeAjax(url);
    parseResult(result);
}

function makeAjax(url){
    $.ajax(url,function(response){
        make.next(response);
    });
}
var make=makeRequest();
make.next();


