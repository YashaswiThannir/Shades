var colors = ["rgb(255, 0, 0)",
             "rgb(255, 255, 0)",
             "rgb(0, 255, 0)",
             "rgb(0, 255, 255)",
             "rgb(0, 0, 255)",
             "rgb(255, 0, 255)"];

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var givenColor = givenColor();
var guessColor = document.getElementById("guessColor");
guessColor.textContent = givenColor;

for(var i = 0; i< squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
var sqColor = this.style.background;
   if(givenColor === sqColor ) {
       allSqColors(givenColor);
       message.textContent = "Correct";
   }else{
       message.textContent = "Try Again";
       this.style.background = "#232323";
   }
});
}

function allSqColors(color){
    for(var i=0; i< squares.length; i++){
        squares[i].style.background = givenColor;
    }
}

function givenColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}