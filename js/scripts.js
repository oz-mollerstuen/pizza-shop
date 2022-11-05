//--------------------Bus Log---------------------//

  function Pies(size, sauces, addOns) {
    this.size = size;
    this.sauces = sauces;
    this.addOns = addOns;
    this.pricing = 0;
  };
  
Pies.prototype.sizePrices = function() {
  
    if(this.size === "lg") {
      this.pricing = 15;
      console.log("made it here");
    }  
      else if(this.size === "med") {
        this.pricing = 12;
      }
      else if(this.size === "sm") {
        this.pricing = 10;
      }
      return this.pricing;
}  

Pies.prototype.saucePrices = function() {
  
  if(this.sauces === "tom") {
    this.pricing = 0;
    console.log("made it here again");
  }  
    else if(this.size === "gar") {
      this.pricing = 4;
    }
    else if(this.size === "pest") {
      this.pricing = 3;
    }
    return this.pricing;
  }  

  Pies.prototype.addOnPrices = function() {
    this.pricing += (this.addOns.length * 2);
    return this.pricing;
    
  }
 
 
//--------------------UI Logic--------------------//

function handleSubmit(event) {
  event.preventDefault();
  
  let addOnsChoice = document.querySelectorAll('input[type = checkbox]:checked');
  let sizeChoice = document.getElementById("size").value;
  let sauceChoice = document.getElementById("sauces").value;
  let newPie = new Pies(sizeChoice, sauceChoice, addOnsChoice);

  for (let i = 0; i < addOnsChoice.length; i++) {
    
    newPie.addOns.push(addOnsChoice[i].value)
    
    }
  
newPie.addOnPrices();
newPie.saucePrices();
newPie.sizePrices();
   
document.getElementById("cost").innerHTML = newPie.pricing;

};

window.addEventListener("load", function() {
  this.document.getElementById("pie-choices").addEventListener("submit", handleSubmit);
});
