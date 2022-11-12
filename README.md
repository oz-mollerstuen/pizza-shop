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


# _Pizza Shop_

#### By _**Lucas Mollerstuen**_

#### _Calculates a cost of pizza_

## Technologies Used

* _JavaScript_
* _HTML_
* _BootStrap_
* _CSS_
* _Dall-E_

## Description

_A simple project using constructors and loops to fins the cost of a pizza given user input_

## Setup/Installation Requirements

* _download from GitHub and open the "index.html"_




## Known Bugs

* _No known bugs_

## License

Copyright (c) <2022> <Lucas Mollerstuen>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.