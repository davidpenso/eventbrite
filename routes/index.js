var express = require('express');
var router = express.Router();
var Eventbrite = require('eventbrite');
var eb_client = Eventbrite({'app_key':"YOUR_API_KEY", 'user_key':"137155191064873094171"});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
