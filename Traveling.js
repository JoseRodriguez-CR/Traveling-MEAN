//adding character from south to north and west to east

var tigger = {character: "Tigger"}; // start with just the character attribute

var pooh = {character: "Winnie the Pooh"};
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
pooh.north = tigger.north.north;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;

var bees = {character: "Bees"};
bees.west = tigger.north;
tigger.north.east = bees;

var owl = {character:"Owl"};
owl.east = pooh.north;
piglet.north = owl;


var christopherRobin = {character: "Christopher Robin"};
christopherRobin.south = tigger.north;
christopherRobin.west = piglet.north;


var rabbit = {character: "Rabbit"};
bees.north = rabbit;
christopherRobin.east = bees.north;


var gopher = {character: "Gopher"};
gopher.west = rabbit;
rabbit.east = bees.north.east;


var kanga = {character: "Kanga"};
christopherRobin.north = kanga;


var eeyore = {character: "Eeyore"};
eeyore.south = christopherRobin.north;
kanga.north = eeyore;

var heffalumps = {character: "Heffalumps"};
heffalumps.west = kanga.north;
eeyore.east = heffalumps;


//console.log(tigger);
//console.log(piglet);
//console.log(kanga);


var player = {
    location: tigger
}

function move(direction){
    if(direction == "north" ){
        if(player.location.north == undefined){
            console.log("There is not path to head North, so you may not go that way!")
        }
        else {
            player.location = player.location.north;
            console.log("You moved to North and arrive at " + player.location.character + "'s house!");
        }
    }
    if(direction == "south" ){
        if(player.location.south == undefined){
            console.log("There is not path to head South, so you may not go that way!")
        }
        else {
            player.location = player.location.south;
            console.log("You moved to South and arrive at " + player.location.character + "'s house!");
        }
    }
    if(direction == "east" ){
        if(player.location.east == undefined){
            console.log("There is not path to head East, so you may not go that way!.")
        }
        else {
            player.location = player.location.east;
            console.log("You moved to East and arrive at " + player.location.character + "'s house!");
        }
    }
    if(direction == "west" ){
        if(player.location.west == undefined){
            console.log("There is not path to head West, so you may not go that way!.")
        }
        else {
            player.location = player.location.west;
            console.log("You moved to West and arrive at " + player.location.character + "'s house!");
        }
    }
}


//console.log(piglet.west);
//console.log(player.location.south);
move("south");
move("north");
move("west");
move("north");
move("east");
move("north");
move("north");
move("east");