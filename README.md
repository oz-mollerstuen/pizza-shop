Pizzas are Pies.

Describe: Pies() 

Test: "It should create a constructor holding addOns, size, plain cheese pies, and sauce"
Code: function Pies()
  this.pies = {};

  function Pies(addOns, size,
    this.cheese = 8;
    this.sauce = sauce;
    this.size = size;
    this.addOns = addOns;
expected output: 8, sauce, size, addOns

discribe: prototype.prices

Test: "It should add in the prices of the pie sizes"
Code: Pies.prototype.prices = function() {
  let finalPrice = 0;
    if(this.size === "Large") {
      this.finalPrice = 15;
    }  
Expected output: finalPrice will = the price of size selected

Test: "It should add in the prices of the pie add ons for toppings"
Code: if(this.addOns === 3) {
  this.finalPrice += 6;
}

Expected output: finalPrice will += the price of add ons selected

Test: "It should add in the prices of the pie sauces"
Code: if(this.sauce === 2) {
  this.finalPrice += 6;
}
Expected output: finalPrice will += the price of sauces selected


