//--------------------Bus Log---------------------//

  function Pies(size, addOns, sauce) {
    this.size = size;
    this.addOns = addOns;
  };
  let tempPrice2 = 0;
  let tempPrice1 = 0;

Pies.prototype.sizePrices = function() {
  
    if(this.size === "lg") {
      this.tempPrice1 += 15;
      console.log("made it here");
    }  
      else if(this.size === "med") {
        this.tempPrice1 += 12;
      }
      else if(this.size === "sm") {
        this.tempPrice1 += 10;
      }
      return tempPrice1;
      console.log(tempPrice1)
}  
  Pies.prototype.addOnPrices = function() {
    

    if(this.addOns.includes("Sausage")) {
      this.tempPrice2 += 2;
    }  
      else if(this.addOns.includes("Mushrooms")) {
        this.tempPrice2 += 2;
      }
      else if(this.addOns.includes("Pepperoni")) {
        this.tempPrice2 += 2;
      }
      else {
        this.tempPrice2 += 0;
      }
      return tempPrice2
  }
  
//--------------------UI Logic--------------------//

function handleSubmit(event) {
  event.preventDefault();
  
  const sizeChoice = document.getElementById("size").value
  const saus1 = document.getElementById("sausage").checked
  const mush1 = document.getElementById("mushrooms").checked
  const pep1 = document.getElementById("pepperoni").checked

  const newPies = new Pies(sizeChoice, saus1, mush1, pep1);
  const newPies2= new Pies(sizeChoice, saus1, mush1, pep1);
  const finalPie = newPies.sizePrices().value;
  const finalPie2 = newPies2.addOnPrices().value;

  const finalCost = (finalPie + finalPie2)
  document.getElementById("cost").innerHTML = toString(finalCost);

};

window.addEventListener("load", function() {
  this.document.getElementById("pie-choices").addEventListener("submit", handleSubmit);
});
