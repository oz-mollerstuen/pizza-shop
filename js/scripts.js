//--------------------Bus Log---------------------//
function Pies() {
  this.pies
}


  function Pies(size, addOns) {
    this.size = size;
    this.addOns = addOns;
  }

Pies.prototype.sizePrices = function() {
  let finalPrice = 0;
    if(this.size === "Large") {
      this.finalPrice = 15;
    }  
      else if(this.size === "Medium") {
        this.finalPrice = 12;
      }
      else if(this.size === "Small") {
        this.finalPrice = 10;
      }
}  
  Pies.prototype.addOnPrices = function() {
    if(this.addOns === "1") {
      this.finalPrice += 2;
    }  
      else if(this.addOns = "2") {
        this.finalPrice += 4;
      }
      else if(this.addOns = "3") {
        this.finalPrice += 5;
      }
      else {
        this.finalPrice += 0;
      }
  }





//--------------------UI Logic--------------------//

//window.addEventListener("load", function(event) {
  //event.preventDefault();
  //const form = document.getElementById();
  //form.addEventListener("submit", );
//)};