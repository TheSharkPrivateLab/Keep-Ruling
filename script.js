function clickFood(player) {
    player.food++;
    display(player);
}

function clickWood(player) {
    player.wood++;
    display(player);
}

function clickStone(player) {
    player.stone++;
    display(player);
}

function clickScience(player) {
    player.science++;
    display(player);
}

function displayBuildings(player) {
    var html = "<h4>Building</h4>";
    player.buildings.forEach(function (building) {
        html += "<section><button class=\"build-button\" id=\"" + building.name + "\">Build " + building.name + "</button> " + building.name + ": <span id=\"show-" + building.name + "\">" + building.amount + "</span>";
        html += " <span class=\"building-requirements\">Needs ";
        if (building.foodCost > 0) {
          html += building.foodCost + " food; ";
        }
        if (building.woodCost > 0) {
          html += building.woodCost + " wood; ";
        }
        if (building.stoneCost > 0) {
          html += building.stoneCost + " stone; ";
        }
        if (building.scienceCost > 0) {
          html += building.scienceCost + " science; ";
        }
        html += "</span></section>";
    });
    $("#build-block").html(html);
}

function initPlayerBuildings(player) {
    var house = new Building("House", 0, 10, 5, 0);
    player.buildings.push(house);
    var house = new Building("Mansion", 0, 100, 50, 0);
    player.buildings.push(house);
}

function build(player, buildingName) {
    player.buildings.forEach(function (building) {
        if (building.name === buildingName) {
            print(building);
            if (player.food >= building.foodCost &&
                player.wood >= building.woodCost &&
                player.stone >= building.stoneCost &&
                player.science >= building.scienceCost) {
                building.amount++;
                player.food -= building.foodCost;
                player.wood -= building.woodCost;
                player.stone -= building.stoneCost;
                player.science -= building.scienceCost;
                display(player);
                displayBuildings(player);
            }
        }
    });
}
