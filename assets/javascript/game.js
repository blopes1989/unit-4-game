$(document).ready(function() {
//variables
var generated;
var oneV;
var twoV;
var threeV;
var fourV;
var win = 0;
var loss = 0;
var myTotal = 0;
var currentWins;
var currentLosses;


//generate number
generated = Math.floor(Math.random() *101+19);
$("#generate").text(generated);

//numbers for crystal
oneV = Math.floor(Math.random() *12+1);

twoV = Math.floor(Math.random() *12+1);

threeV = Math.floor(Math.random() *12+1);

fourV = Math.floor(Math.random() *12+1);


//adding crystal together 
$('#one').click(function(){
    myTotal =  oneV + myTotal
    $('#total').text("myTotal: "+myTotal);  
    console.log(myTotal)    
});

   $('#two').click(function(){
    myTotal = (myTotal) + ($(twoV).val());
    $('#total').text("myTotal: "+myTotal);      
});

   $('#three').click(function(){
    myTotal = (myTotal) + ($(threeV).val());
    $('#total').text("myTotal: "+myTotal);      
});

   $('#four').click(function(){
    myTotal = (myTotal) + ($(fourV).val());
    $('#total').text("myTotal: "+myTotal);
    
    
    console.log(myTotal)
});

//compare to generated number


//declare winner loser 


//update win/loss


//start next round


$("generate").text(generated)

});
