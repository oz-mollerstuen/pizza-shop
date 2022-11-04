//--------------------Bus Log---------------------//
function Pies() {
  this.pies
}


  function Pies(size, addOns, sauce) {
    this.size = size;
    this.addOns = addOns;
    this.sauce = sauce;
  }

Pies.prototype.sizePrices = function() {
  let tempPrice = 0;
    if(this.size === "Large") {
      this.tempPrice = 15;
    }  
      else if(this.size === "Medium") {
        this.tempPrice = 12;
      }
      else if(this.size === "Small") {
        this.tempPrice = 10;
      }
      return tempPrice;
}  
  Pies.prototype.addOnPrices = function() {
    let tempPrice = 0;
    if(this.addOns === "1") {
      this.tempPrice += 2;
    }  
      else if(this.addOns = "2") {
        this.tempPrice += 4;
      }
      else if(this.addOns = "3") {
        this.tempPrice += 5;
      }
      else {
        this.tempPrice += 0;
      }
      return tempPrice
  }

  Pies.prototype.saucePrices = function() {
    let tempPrice = 0;
    if(this.sauce === "1") {
      this.tempPrice += 2;
    }  
      else if(this.sauce = "2") {
        this.tempPrice += 4;
      }
      else if(this.sauuce = "3") {
        this.tempPrice += 5;
      }
      else {
        this.tempPrice += 0;
      }
      return tempPrice;
  }



//--------------------UI Logic--------------------//

//window.addEventListener("load", function(event) {
  //event.preventDefault();
  //const form = document.getElementById();
  //form.addEventListener("submit", );
//)};