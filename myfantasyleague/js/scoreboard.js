define('scoreboard',
    [],
    function () {
        var template = require("ejs-compiled!./templates/scoreboard.ejs");
        var scoreboard = {

	 		init:function(){
                var teamNames = $('table td table.report caption span');
                var teamPoints = $('table td table.report .grand_total .points b');
                var games = $('.reportform option');
                var gameData = [];

                games.each(function(idx, val) {
                    var teams = val.textContent.split('at');

                    gameData[idx] = {
                        team1: scoreboard.getTeamInfo(teams[0]),

                        team2: scoreboard.getTeamInfo(teams[1])
                    }
                });

                var scores = template({gameData});

                //$(scores).appendTo($('.reportform'));
                console.log(scores);

	 		},

            getTeamInfo:function(teamStr) {
                var parenStart = teamStr.indexOf('(');
                var parenEnd = teamStr.indexOf(')');
                var teamData = {
                    name: teamStr.substring(0, parenStart),
                    score: teamStr.substring(parenStart+1, parenEnd)
                };

                return teamData;
            }
        }

        return scoreboard;
});