function print(a) { console.log(a); }

function getRandomInt(max) {
    var min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function eventMessage(message, player) {
    print(message);
    player.events.unshift([message, 15]);
}
