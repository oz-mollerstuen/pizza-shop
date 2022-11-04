//--------------------Bus Log---------------------//

function Pies()
  this.pies = {};

  function Pies(addOns, size, sauce) {
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
    
    if(this.addOns === 3) {
      this.finalPrice += 6;
    }
    else if(this.addOns === 2) {
      this.finalPrice += 4;
    }
    else if(this.addOns === 1 ) {
      this.finalPrice += 2;
    }
    else {
      this.finalPrice += 0;
    }

    if(this.sauce === 2) {
      this.finalPrice += 8;
    }
    else if(this.sauce === 1) {
      this.finalPrice += 4;
    }
    else {
      this.finalPrice += 0;
    }
}
