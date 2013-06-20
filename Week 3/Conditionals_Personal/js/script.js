// Taylor Cawiezell - Conditionals Assignment - Personal - 06/20/2013

//How many Poke'mon I've collected versus many friends I have
alert("Lets see how many friends Taylor can keep after buying the new Poke'mon game.")
// variables for pokemon collected and friends I currently have.
var friends = prompt("How many friends does Taylor have?");
var pokemon = prompt("How many Poke'mon has Taylor Collected?")
// Condition for having any friends left.
 friendsLeft = (friends < pokemon) ? alert("Taylor lost all his friends.") : prompt("Taylor has " + (friends - pokemon) + " friends left.");





