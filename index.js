var randomNumber1 = Math.ceil(Math.random() * 6)
var player1 = document.querySelector(".img1")
player1.setAttribute("src","./images/dice"+ randomNumber1 +".png")

var randomNumber2 = Math.ceil(Math.random() * 6)
var player2 = document.querySelector(".img2")
player2.setAttribute("src","./images/dice"+ randomNumber2 +".png")

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}