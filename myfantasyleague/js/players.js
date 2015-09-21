(function() {

    var pages = {
        submitRoster: 'body_options_02',
        roster: 'body_options_07',
        freeAgents: 'body_free_agents',
        scoreboard: 'body_live_scoring'
    }

    var players = $('td.player a[class^="position"]');
    var pageId = $('body')[0].id;

    if(players.length) {
        var playerTh = $('.report th.player');
        var showPlayerImages = false;
        switch(pageId) {
            case pages.freeAgents:
                    break;

            case pages.roster:
                 adjustRosterView();
                 var showPlayerImages = true;
                 break;
        }

        updatePlayerRows(playerTh, showPlayerImages);
    }

    if(pageId == pages.scoreboard) {
        createScoreboard();
    }

    if(pageId == pages.freeAgents) {
        adjustFreeAgentsView();
    }


    makeSticky('.reportform');
    $('.sticky').Stickyfill();


    function updatePlayerRows(playerTh, showPlayerImages) {

        // Add Pos to header for player position heading
        $('<th>Pos</th>').insertBefore(playerTh);

        if(showPlayerImages) {
            $('<th></th>').insertBefore(playerTh);
        }

        players.each(function(idx, val) {
            var playerId = getPlayerId(val.href);
            var playerPosition = getPlayerPosition(val.className);
            var nextGame = getPlayerNextGame(val.title);

            //Add Player Next Game Info
            $(val.parentNode).append('<p class="nextGame">'+nextGame+'</p>');

            //Add Player Position
            $('<td class="playerPosition '+playerPosition+'"><span>'+playerPosition+'</span></td>').insertBefore(val.parentNode);

            if(showPlayerImages) {
                var img = getPlayerImage(playerId);
                 //Add Player Image
                $('<td class="img"><span class="playerImage" style="background-image:url(\''+img+'\')"></span></td>').insertBefore(val.parentNode);
            }
        });
    }

    function getPlayerId(url) {
        var entry, field, qs, _i, _len;
        qs = url.split('?')[1].split('&');
        for (_i = 0, _len = qs.length; _i < _len; _i++) {
            field = qs[_i];
            entry = field.split('=');
            if (entry[0] === 'P') {
                return entry[1];
            }
        }
    }

    function getPlayerPosition(cls) {
        var pos = cls.split('_')[1];
        return pos;
    }

    function getPlayerImage(playerId) {
        var urlBase = "http://www20.myfantasyleague.com/player_photos_2014/";
        var url = urlBase + playerId + "_thumb.jpg";
        return url;
    }

    function getPlayerNextGame(gameStr) {
        var str = gameStr.split(":");
        return str[1]+str[2];
    }


    function adjustRosterView() {
        var franchiseLogo = $('.franchiselogo');
        $('.pagebody').prepend(franchiseLogo);
        $('h3 + br').remove();
    }

    function makeSticky(elmClass) {
        var elm = $(elmClass);
        if(elm.length) {
            elm.addClass('sticky');
        }
    }


    //TODO Move this out to its own file
    function createScoreboard() {
        var teamNames = $('table td table.report caption span');
        var teamPoints = $('table td table.report .grand_total .points b');
        var allTeams = $('.reportform option');

        allTeams.each(function(idx, val) {
            var teams = val.textContent.split('at');

            var parenStart = teams[0].indexOf('(');
            var parenEnd = teams[0].indexOf(')');

            var teamName = teams[0].substring(0, parenStart);
            var teamScore = teams[0].substring(parenStart+1, parenEnd);
            console.log(teamName, teamScore);

            //var teams[0].replace(')', '')
            //var team1 = teams[0].split('(');
            //console.log(team1);
        });

        var team1 = {
            name: teamNames[0].textContent,
            points: teamPoints[0].textContent
        }

        var team2 = {
            name: teamNames[1].textContent,
            points: teamPoints[1].textContent
        }

        var scoreboard = '<table class="scoreboard"><tbody><tr>';
        scoreboard += '<td><h3>'+team1.name+'</h3><h4>'+team1.points+'</h4></td>';
        scoreboard += '<td><h3>'+team2.name+'</h3><h4>'+team2.points+'</h4></td>';
        scoreboard += '</tr></tbody></table>';

        $(scoreboard).appendTo($('.reportform'));

    }

}).call(this);