//custom function

function calculateTip () {
    
    //store inpute data
    
    var billAmount = document.getElementById("billAmount").value;
    
    var serviceQuality = document.getElementById("serviceQuality").value;
    
    var totalPeople = document.getElementById("totalPeople").value;
    
    //quick validation
    if (billAmount === "" || serviceQuality == 0) {window.alert("Please entry a value");
    return;   // prevent function to go ahead                                             
                                                    
    }
    // check if this input is empty or less than or equal to 1
    if(totalPeople == "" || totalPeople <= 1){
        totalPeople = 1;
        
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }
    
    //do the math
    
    var total = (billAmount*serviceQuality)/totalPeople;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display= "block" ;
    document.getElementById("tip").innerHTML = total;
} 




//Hide the tip amount onload:

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking button call custom function

document.getElementById("calculate").onclick = function (){calculateTip();
    
};


