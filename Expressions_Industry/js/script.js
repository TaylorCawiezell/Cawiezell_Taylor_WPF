//Taylor Cawiezell 6/13/2013: Assignment:Expressions- Industry

alert("BestBuy has many employees and a huge work enviorment. Lets find out in comparison on average how many square feet each employee gets.");

// Im calculating the number of total square footage and deviding it by the number of employees.

var bestBuy = prompt("How many BestBuy stores are there in our calculation?");
// calculating the size of the store
var size = prompt("How many square feet does each store have?");
//calculating the number of employees
var employee = prompt("How many employees are in each store?");
//calculating the squre foot total of stores
var totalSQ = bestBuy * size;
//expression for how much square feet for each employee
var totalPE = bestBuy * size / employee;

alert("Out of " + totalSQ + " total square feet there are " + totalPE + " square feet per emloyee.");


