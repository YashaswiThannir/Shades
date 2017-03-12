var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var givenColor = givenColor();
var guessColor = document.getElementById("guessColor");
guessColor.textContent = givenColor;
var heading = document.querySelector("h1");

for(var i = 0; i< squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
var sqColor = this.style.background;
   if(givenColor === sqColor ) {
       allSqColors(givenColor);
       heading.style.background=givenColor;
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

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i< num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" +r+ ", "+g+", "+b+")";
}