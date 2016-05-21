/*url路径解析模块，传入url，解析出所有的地址*/
//https://g.alicdn.com/kg/??webp-replacer/0.0.2/index-min.js,aladdin/0.0.8/index-min.js,slide/6.0.8/index-min.js,event-binder/0.0.2/index-min.js
var Url=require('url');
var queryString=require('querystring');
var path=require('path');
// module.exports.parseURL=function(url){
//     var urlObj=queryString(url);
//     console.log("%o",urlObj);
// }
function parseURL(url){
    var urlObj=Url.parse(url,true);
    //console.log("%o",urlObj);
    var pathname=urlObj.pathname;
    var filenames=[];
    if(urlObj.search){
        filenames=parseSearch(urlObj.search,pathname);
    }else{
        var reg_single_file=/^[^\?\,]+$/ig;
        if(pathname && reg_single_file.test(pathname)){
            filenames.push(pathname);
        }
    }
    return filenames;
}
function parseSearch(search,pathname){
  var reg_search=/^\?\?([^\?]+)$/i;
  if(search && reg_search.test(search)){
      var filenames=reg_search.exec(search)[1];
      filenames=filenames.split(",");
      for(var i=0,len=filenames.length;i<len;i++){
          filenames[i]=path.join(pathname,filenames[i]);
      }
      return filenames;
  }
      return null;
}
var url="https://g.alicdn.com/kg/??webp-replacer/0.0.2/index-min.js,aladdin/0.0.8/index-min.js,slide/6.0.8/index-min.js,event-binder/0.0.2/index-min.js";
var url2="https://g.alicdn.com/kg/webp-replacer/0.0.2/index-min.js";
var url3="http://assets.example.com/foo/bar.js,foo/baz.js";
console.log("1 %o",parseURL(url));
console.log("2 %o",parseURL(url2));
console.log("3 %o",parseURL(url3));
module.exports.parseURL=parseURL;





