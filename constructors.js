function Player(name) {
    this.username = name;
    this.food = 0;
    this.wood = 0;
    this.stone = 0;
    this.population = 0;
    this.inventory = [];
    this.season = 0; // 0 Spring, 1 Summer, 2 Autumn, 3 Winter
    this.daySeason = 0;
    this.dayTotal = 0;
    this.year = 1;
    this.chat = [];
    return this;
}

function InventoryItem() {
    this.name = "";
    this.amount = 1;
    return this;
}