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
generated = Math.floor(Math.random() *120);
$("#generate").text(generated);

//numbers for crystal
oneV = Math.floor(Math.random() *12)+1;

twoV = Math.floor(Math.random() *12,)+1;

threeV = Math.floor(Math.random() *12)+1;

fourV = Math.floor(Math.random() *12)+1;

$('button').click(function(){
 myTotal = Number(myTotal) + Number($(this).val());
 $('#total').text("myTotal: "+myTotal);      
});
$("#total").text(+myTotal)
console.log(myTotal)
//adding crystal together 



//compare to generated number


//declare winner loser 


//update win/loss


//start next round


$("generate").text(generated)

});
