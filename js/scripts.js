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
    if(this.size === "lg") {
      this.tempPrice = 15;
    }  
      else if(this.size === "med") {
        this.tempPrice = 12;
      }
      else if(this.size === "sm") {
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
        this.tempPrice += 2;
      }
      else if(this.addOns = "3") {
        this.tempPrice += 2;
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
      else if(this.sauce = "3") {
        this.tempPrice += 5;
      }
      else {
        this.tempPrice += 0;
      }
      return tempPrice;
  }



//--------------------UI Logic--------------------//
let pies = new Pies();

function output(finalCost) {
  $(".cost").html(
    "Your Pizza is $" +
      (finalCost.sizePrices() +
        finalCost.addOnPrices() +
        finalCost.saucePrices())
  );
  //confetti();
}

$(document).ready(function () {
  $("form#pie-choices").submit(function (event) {
    event.preventDefault();
    const theAdds = $("#toppings option:selected").val();
    const theSize = $("#size option:selected").val();
    const theSauce = $("#sauce option:selected").val();
    $("#toppings option:selected").val("");
    $("input:radio[name=crustSize]:checked").val("");
    $("#sauce option:selected").val("");
    let finalCost = new Pie(theAdds, theSize,theSauce);
    displayPrice(finalCost);
  });
});