//Taylor Cawiezell 6/13/2013: Assignment:Expressions- Industry

alert("BestBuy has many employees and a huge work enviorment. Lets find out in comparison on average how many square feet each employee gets.");

// Im calculating the number of total square footage and deviding it by the number of employees.

var bestBuy = prompt("How many BestBuy stores are there in our calculation?");

var size = prompt("How many square feet does each store have?");

var employee = prompt("How many employees are in each store?");

var totalSQ = bestBuy * size;

var totalPE = bestBuy * size / employee;

alert("Out of " + totalSQ + " total square feet there are " + totalPE + "square feet per emloyee".);
