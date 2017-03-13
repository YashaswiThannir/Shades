var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var giveColor = givenColor();
var guessColor = document.getElementById("guessColor");
guessColor.textContent = giveColor;
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#forReset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numOfSquares);
    giveColor = givenColor();
    guessColor.textContent = giveColor;
    for(var i = 0; i< squares.length; i++){
    squares[i].style.background = colors[i];
    }
    heading.style.background = "#232323";
    resetButton.textContent="New Colors";
});

easy.addEventListener("click", function(){
   easy.classList.add("selected");
   hard.classList.remove("selected");
   numOfSquares = 3;
   colors = generateRandomColors(numOfSquares);
   giveColor = givenColor();
   guessColor.textContent = giveColor;   
   for(var i = 0; i< squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i];  
    }else
        squares[i].style.display = "none";  
        heading.style.background = "#232323";
    }
});

hard.addEventListener("click", function(){
   hard.classList.add("selected");
   easy.classList.remove("selected"); 
   numOfSquares = 6;
   colors = generateRandomColors(numOfSquares);
   giveColor = givenColor();
   guessColor.textContent = giveColor;   
   for(var i = 0; i< squares.length; i++){
    
        squares[i].style.background = colors[i];  
   
        squares[i].style.display = "block";  
       
    }
    heading.style.background = "#232323";
});

for(var i = 0; i< squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
var sqColor = this.style.background;
   if(giveColor === sqColor ) {
       allSqColors(giveColor);
       heading.style.background=giveColor;
       message.textContent = "Correct!";
       resetButton.textContent="Play Again";
   }else{
       message.textContent = "Try Again!";
       this.style.background = "#232323";
   }
});
}

function allSqColors(color){
    for(var i=0; i< squares.length; i++){
        squares[i].style.background = giveColor;
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

