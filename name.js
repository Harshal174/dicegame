var a=(Math.floor(Math.random()*6))+1;
//console.log(a);
var randomDiceImage="dice"+a+".png";
var randomImageSource="./Dicee Challenge - Starting Files/images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var b=(Math.floor(Math.random()*6))+1;
console.log(b)
var randomDiceImage2="dice"+b+".png";
var randomImageSource1="./Dicee Challenge - Starting Files/images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(a>b){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(b>a){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW"; 
}