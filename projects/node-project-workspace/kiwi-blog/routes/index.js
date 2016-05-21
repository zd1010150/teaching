var express = require('express');
var router = express.Router();


/*construct infos*/
var person={
	photo:'/images/kiwi-photo.jpg',
	name:'kiwi',
	title:'烂前端工程师'
};
var papers=[];

function Paper(paperTitle,paperTime,paperExtract,paperCategory,tags,paperReadTime){
	this.paperTitle=paperTitle;
	this.paperTime=paperTime;
	this.paperExtract=paperExtract;
	this.paperCategory=paperCategory;
	this.tags=tags;
	this.paperReadTime=paperReadTime;
}
papers.push(new Paper(
	'第一次读史记',
	'2016-4-5 12:30:30',
	'很多不懂很多不懂很多不懂很多不懂很多不懂',
	'读书杂项',
	['读书','随笔'],
	12
	)
);
papers.push(new Paper(
	'用jade搭建网站',
	'2016-4-5 12:30:30',
	'jade很多不懂很多不懂很多不懂很多不懂很多不懂',
	'node',
	['node','jade'],
	13
	)
);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { person: person,papers:papers });
});
module.exports = router;
