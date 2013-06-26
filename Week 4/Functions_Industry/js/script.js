// Functions Assignment - Industry - Taylor Cawiezell- 06/26/2013

// Im compiling a function that calculates how much money you will make to design a website.

// describing function
alert("Lets find out how much money you will make per website, designing three websites for a client.");


// seting functions paramiters & setting functions name.
var howMuch = function(perH, hour, overTime){
 var paid = (hour >= 40)
     ? alert("You made " + perH * hour * overTime + " dollars total on this website.")
     : alert("You made " + perH * hour + " dollars total on this website.");
     
};



//testing code. / seting argument with prompts.
howMuch(prompt("How much will you charge per hour for the first website?"), prompt("How many hours will the first website take you?"), 1.5);
howMuch(prompt("How much will you charge per hour for the second website?"), prompt("How many hours will the second website take you?"), 1.5);
howMuch(prompt("How much will you charge per hour for the third website?"), prompt("How many hours will the third website take you?"), 1.5);






     
   


	
	
	
