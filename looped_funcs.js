function turnToWinter(player) {
    player.season = 0;
    player.daySeason = 0;
    player.year++;
}

function time(player) {
    var season = "";
    var Season = "";
    var weather = "";
    var color = "";

    player.daySeason += 1;
    player.dayTotal += 1;
    switch (player.season) {
        case 0:
            season = Season = "Spring";
            if (player.daySeason > 93) {
                player.season = 1;
                player.daySeason = 0;
            }
            break;
        case 1:
            season = "Summer";
            Season = "Summer";
            if (player.daySeason > 94) {
                player.season = 2;
                player.daySeason = 0;
            }
            break;
        case 2:
            season = Season = "Autumn";
            if (player.daySeason > 90) {
                player.season = 3;
                player.daySeason = 0;
            }
            weather = "weather rain";
            break;
        case 3:
            season = Season = "Winter";
            weather = "weather snow";
            color = "background-color:#A5D2FF;";
            if (player.daySeason > 89) {
                turnToWinter(player);
            }
            break;
        default:
    }
    $("#time").attr("class", weather);
    $("#time").attr("style", color);
    //$("#time").html("<img src=\"ressources/" + Season + ".png\"><p>Jour " + player.dayTotal + ", Ann&eacutee " + player.year + "</p><p>" + season + "</p>");
    $("#time").html("<p>Jour " + player.dayTotal + ", Ann&eacutee " + player.year + "</p><p>" + season + "</p>");
}

function display(player) {
    $("#show-food").html(player.food);
    $("#show-wood").html(player.wood);
    $("#show-stone").html(player.stone);
    $("#show-science").html(player.science);
    $("#show-house").html(player.house);
}