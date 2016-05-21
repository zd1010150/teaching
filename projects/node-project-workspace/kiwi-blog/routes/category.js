
var express = require('express');
var router = express.Router();


/*construct infos*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('category/index');
});
module.exports = router;
