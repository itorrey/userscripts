(function() {
    var players = $('a[class^="position"]');
    var pageId = $('body')[0].id;

    var pagesToShow = ['','body_options_07', 'body_options_08'];
    console.log(pagesToShow.indexOf(pageId));

    if(players.length && pagesToShow.indexOf(pageId) > 0) {
        showPlayerImages();

        var report = $('.report tbody');
        if(report.length) {
            report.each(function(idx, val) {
                $(val.firstChild).prepend('<th>Pos</th><th></th>');
            });
        }
    }

    function showPlayerImages() {
        players.each(function(idx, val) {
            var playerId = getPlayerId(val.href);
            var playerPosition = getPlayerPosition(val.className);
            var img = getPlayerImage(playerId);
            var nextGame = getPlayerNextGame(val.title);

            //Add Player Image
            $(val.parentNode.parentNode).prepend('<td class="img"><span class="playerImage" style="background-image:url(\''+img+'\')"></span></td>');

            //Add Player Next Game Info
            $(val.parentNode).append('<p class="nextGame">'+nextGame+'</p>');

            //Add Player Position
            $(val.parentNode.parentNode).prepend('<td class="playerPosition '+playerPosition+'"><span>'+playerPosition+'</span></td>');
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



}).call(this);