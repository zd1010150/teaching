var body = require("./body");
var head = require("./head");
exports.create = function() {
  return {
    body: body.create(),
    head: head.create()
  };
};
module.exports.sayHi = function(words) {
  return 'hi' + words;
};