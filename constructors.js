function Player(name) {
    this.username = name;
    this.food = 0;
    this.maxFood = 100;
    this.wood = 0;
    this.maxWood = 100;
    this.stone = 0;
    this.maxStone = 100;
    this.science = 0;
    this.maxScience = 100;
    this.population = 0;
    this.maxPopulation = 0;
    this.farmers = 0;
    this.lumbermen = 0;
    this.miners = 0;
    this.scientists = 0;
    this.soldiers = 0;
    this.buildings = [];
    this.events = [];
    this.season = 0; // 0 Spring, 1 Summer, 2 Autumn, 3 Winter
    this.monthSeason = 1;
    this.monthTotal = -1;
    this.year = 1;
    this.chat = [];
    return this;
}

function Building(name, type, value, foodCost, woodCost, stoneCost, scienceCost) {
    this.name = name;
    this.foodCost = foodCost;
    this.woodCost = woodCost;
    this.stoneCost = stoneCost;
    this.scienceCost = scienceCost;
    this.type = type;
    this.value = value;
    this.amount = 0;
    return this;
}
