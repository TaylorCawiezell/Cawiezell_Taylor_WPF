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


console.log(leftTotal + "is the amount sparky will get"); 




//Expression Worksheet Priblem 4: Average shopping bill

//creating array for the 5 weeks of groceries.

var groceries = [69,200,99,160,50];
//expression for getting average.
var average = (groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4]) / 5;

console.log(average + " is the average of the past five weeks groceries");




//Expression Worksheet Problem 5: Discounts

var originalPrice = 120;

var discount = .20;

var salesTax = 1.06;

var sale = originalPrice * discount;

var totalWithTax = originalPrice - sale * salesTax;

var totalWithOut = sale - originalPrice

console.log(totalWithTax);




 




