var meal = Number(prompt("How much did your meal cost?"));
var num1 = 0.07;
var num2 = 0.05;
var tax = (meal * num1);
var tip = (meal * num2);

document.body.innerHTML = "Price is for you meal is $" + meal +"." + " You paid $" + tax +" in taxes"+ " and tipped $" + tip;