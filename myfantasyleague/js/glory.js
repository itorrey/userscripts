require('expose?$!expose?jQuery!jquery');
require('./stickyfix');
require('./players');
var lineup = require('./lineup');
var mfl = require('../node_modules/mfl-api');

var myMfl = new mfl('21502');

/*var test = myMfl.request('projectedScores',{
	leagueid: '21502',
	week: '3',
	playerid: '12155'
}, function(err, body){
	console.log(err, body);
});

*/

//lineup.init();
//var tpl = require("./templates/template.ejs");
//console.log(tpl({noun: "World"}));