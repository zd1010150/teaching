var express = require('express');
var router = express.Router();
var results=[];
results.push("很多不懂1");
results.push("很多不懂3");
results.push("很多不懂5");
results.push("很多不懂6");
/* GET users listing. */
router.post('/search.do', function(req, res, next) {
 var keywords=req.body.keywords;
 res.render('search-result', { keywords:keywords,results:results});
});

module.exports = router;
