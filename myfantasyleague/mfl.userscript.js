// ==UserScript==
// @name         MFL Local Dev
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://*.myfantasyleague.com/2015/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @grant        none
// ==/UserScript==

var currentStyle = $('#skin_stylesheet').remove();
$('<link type="text/css" rel="stylesheet" href="http://userscripts.dev/myfantasyleague/css/mflMod.css"/>').appendTo(document.body);
$('<script src="http://userscripts.dev/myfantasyleague/js/players.js"></script>').appendTo(document.body);