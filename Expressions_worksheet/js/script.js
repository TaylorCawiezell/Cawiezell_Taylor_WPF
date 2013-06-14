//Expression Worksheet Problem 1: Dog Years


//Defining Dog's Age
var dogAge = 7;

//Definfing Sparky's Actual Age
var sparkyActualAge = 3;

//Calculating Sparky's age in Dog years.
var sparkyDogAge = dogAge*sparkyActualAge
console.log(sparkyDogAge);



//Expression Worksheet Problem 2: Slice of Pie part 1

//Defining how many pizza slices there are per pizza.
var slicesPer = 9;

//Defining how many people attended the party.
var people = 33;

//Defining how many pizzas where ordered.
var pizzas = 10;

//Calculating the amount of pieces of pizzas each person will eat.
var slicesPP = slicesPer*pizzas/people; 

console.log(slicesPP);



//Expression Worksheet Problem 3: Slice of Pie part 2


//I need to find the left over amount of pizza slices per person.
var leftPP = people % slicesPP;
// I need to multiply the left over slices x the number of people
var leftTotal = leftPP * people;


console.log(leftTotal); 




