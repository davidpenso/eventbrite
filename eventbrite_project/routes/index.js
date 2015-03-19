var express = require('express');
var router = express.Router();
var Eventbrite = require('eventbrite');

var eb_client = Eventbrite({'app_key':"DQ4GLUWS3EY2LGK76K", 'user_key':"137155191064873094171"});
/* GET home page. */


var params = {'region': "NY"};

var datas=[];
var dat=[];
eb_client.event_search( params, function(err, data){
    //console.log(err);
    //console.log(data);
    
	//console.log(data.events[2].event.venue);
	console.log(data.events.length);
	for (var i=1;i<data.events.length;i++){
		console.log(data.events[i].event.venue);
		datas.push(data.events[i].event.venue);
	}
});

var p = {'region': "CA"};
eb_client.event_search( p, function(err, data){
    //console.log(err);
    //console.log(data);
    
	//console.log(data.events[2].event.venue);
	//console.log(data.events.length);
	for (var i=1;i<data.events.length;i++){
		console.log(data.events[i].event.venue);
		dat.push(data.events[i].event.venue);
	}
});
router.get('/', function(req, res) {
	
  res.render('index', { title: 'Express', ny: datas, ca: dat });
});


module.exports = router;
