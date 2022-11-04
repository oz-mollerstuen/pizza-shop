//--------------------Bus Log---------------------//

  function Pies(size, addOns, sauce) {
    this.size = size;
    this.addOns = addOns;
    this.sauce = sauce;
  }

Pies.prototype.sizePrices = function() {
  let tempPrice1 = 0;
    if(this.size === "lg") {
      this.tempPrice += 15;
    }  
      else if(this.size === "med") {
        this.tempPrice += 12;
      }
      else if(this.size === "sm") {
        this.tempPrice += 10;
      }
      return tempPrice1;
}  
  Pies.prototype.addOnPrices = function() {
    let tempPrice2 = 0;

    if(this.addOns.includes("Sausage")) {
      this.tempPrice += 2;
    }  
      else if(this.addOns.includes("Mushrooms")) {
        this.tempPrice += 2;
      }
      else if(this.addOns.includes("Pepperoni")) {
        this.tempPrice += 2;
      }
      else {
        this.tempPrice += 0;
      }
      return tempPrice2
  }

  Pies.prototype.addTop = function(addOns) {
    this.addOns.push(addOns);
}



//--------------------UI Logic--------------------//
let Pie = new Pies();

 
        //finalCost.addOnPrices() 
        

function handleSubmit(event) {
  event.preventDefault();
  const sizeChoice = document.getElementById("size").value
  const saus1 = document.getElementById("sausage").checked
  const mush1 = document.getElementById("mushrooms").checked
  const pep1 = document.getElementById("pepperoni").checked

let finalCost = (tempPrice1 + tempPrice2)
document.getElementById("cost").innerHTML = finalCost;
}

window.addEventListener("load", function() {
  this.document.getElementById("pie-choices").addEventListener("submit", handleSubmit);
});