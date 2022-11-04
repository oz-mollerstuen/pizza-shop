//--------------------Bus Log---------------------//

function Pies()
  this.pies = {};

  function Pies(addOns, size, sauce) {
    this.cheese = 8;
    this.sauce = sauce;
    this.size = size;
    this.addOns = addOns;
  }

Pies.prototype.prices = function() {
  let finalPrice = 0;
    if(this.size === "Large") {
      this.finalPrice = 15;
    }  
      else if(this.size === "Medium") {
        this.finalPrice = 12;
      }
      else {
        this.finalPrice = 10;
      }
    
    
}
