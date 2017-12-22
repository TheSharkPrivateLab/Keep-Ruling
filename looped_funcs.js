function turnToWinter(player) {
    player.monthSeason = 0;
    player.year++;
}

function time(player) {
    var season = "";
    var Season = "";
    var weather = "";
    var color = "";
    var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    player.monthSeason += 1;
    player.monthTotal += 1;
    switch (player.season) {
        case 0:
            season = Season = "Spring";
            if (player.monthSeason == 4) {
                player.season = 1;
            }
            break;
        case 1:
            season = Season = "Summer";
            if (player.monthSeason == 7) {
                player.season = 2;
            }
            break;
        case 2:
            season = Season = "Autumn";
            if (player.monthSeason == 10) {
                player.season = 3;
            }
            weather = "weather rain";
            break;
        case 3:
            season = Season = "Winter";
            weather = "weather snow";
            color = "background-color:#A5D2FF;";
            if (player.monthSeason == 12) {
                turnToWinter(player);
            }
            if (player.monthSeason == 1) {
                player.season = 0;
            }
            break;
        default:
    }
    updatePopulation(player);
    $("#time").attr("class", weather);
    $("#time").attr("style", color);
    //$("#time").html("<img src=\"ressources/" + Season + ".png\"><p>Jour " + player.dayTotal + ", Ann&eacutee " + player.year + "</p><p>" + season + "</p>");
    $("#time").html("<p>" + monthsArray[player.monthSeason] + ", Year " + player.year + "</p><p>" + season + "</p>");
}

function updatePopulation(player) {
    var oldPopulation = player.population;
    player.population = 0;
    player.buildings.forEach(function (building) {
        if (building.type === "Housing") {
            player.population += building.value * building.amount;
        }
    });
    var monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $("#event-population").html(monthsArray[player.monthSeason] + " : " + (player.population - oldPopulation).toString() + " new inhabitants have joined your realm this month.", player);
}

function display(player) {
    $("#show-food").html(player.food);
    $("#show-wood").html(player.wood);
    $("#show-stone").html(player.stone);
    $("#show-science").html(player.science);
    $("#show-population").html(player.population);
}
