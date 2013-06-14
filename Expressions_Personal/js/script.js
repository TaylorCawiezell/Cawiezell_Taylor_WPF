// Taylor Cawiezell 6/13/2013: Assignment Expressions

//How many hours of video games I should play in a lifetime. 
alert("Choose how many video games I should play in a lifetime.");
//collect info on how many days out of the weeek I should play.
var daysP = prompt("How many days should I play a week?");
//collect information on how many hours I will play in a day
var hoursD = prompt("How many hours should I play a day?");
//collect how many years I will live.
var life = prompt("How many years will I live?");
//Variable for how many hour total, based off of data collected.
var total = daysP * hoursD * 52 * life;
alert("I will play " + total + " hours of video games in my lifetime.")



