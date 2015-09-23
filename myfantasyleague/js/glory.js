require('expose?$!expose?jQuery!jquery');
require('./stickyfix');
require('./players');
var tpl = require("./templates/template.ejs");
console.log(tpl({noun: "World"}));