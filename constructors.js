function Player(name) {
    this.username = name;
    this.food = 0;
    this.wood = 0;
    this.stone = 0;
    this.science = 0;
    this.population = 0;
    this.buildings = [];
    this.season = 0; // 0 Spring, 1 Summer, 2 Autumn, 3 Winter
    this.monthSeason = 1;
    this.monthTotal = -1;
    this.year = 1;
    this.chat = [];
    return this;
}

function Building(name, foodCost, woodCost, stoneCost, scienceCost) {
    this.name = name;
    this.foodCost = foodCost;
    this.woodCost = woodCost;
    this.stoneCost = stoneCost;
    this.scienceCost = scienceCost;
    this.amount = 0;
    return this;
}