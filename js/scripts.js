//--------------------Bus Log---------------------//

  function Pies(size, sauces, addOns) {
    this.size = size;
    this.sauces = sauces;
    this.addOns = addOns;
    this.pricing = 0
    
  };
  
Pies.prototype.sizePrices = function() {
 
    if(this.size === "lg") {
      this.pricing += 15;
      console.log("made it here");
    }  
      else if(this.size === "med") {
        this.pricing += 12;
      }
      else if(this.size === "sm") {
        this.pricing += 10;
      }
      return this.pricing;
}  

Pies.prototype.saucePrices = function() {
  
  if(this.sauces === "tom") {
    this.pricing += 0;
    console.log("made it here again");
  }  
    else if(this.sauces === "gar") {
      this.pricing += 4;
    }
    else if(this.sauces === "pest") {
      this.pricing += 3;
    }
    console.log(this.pricing)
    return this.pricing;
    
  }  

  Pies.prototype.addOnPrices = function() {
    this.pricing += (this.addOns.length * 2);
    return this.pricing;
    
  }
 
 
//--------------------UI Logic--------------------//
window.addEventListener("load", function() {
  const form = document.getElementById('pie-choices');
   form.addEventListener('submit', function(event) {
     event.preventDefault();
     document.querySelector('#button').addEventListener("click", finalPie);
    })
    function finalPie() {
      
      let addOns = [];
      const addOnChoice = document.querySelectorAll('input[type=checkbox]:checked');
      const size = document.getElementById('size').value;
      const sauces = document.getElementById('sauces').value;
      let newPie = new Pies(size, sauces, addOns);
    
      for (let i = 0; i < addOnChoice.length; i++) {
        newPie.addOns.push(addOnChoice[i].value)
      }
      newPie.sizePrices();
      newPie.addOnPrices();
      newPie.saucePrices();
      
      document.querySelector("#cost").innerHTML =  '$' + newPie.pricing;
      
}

  })
