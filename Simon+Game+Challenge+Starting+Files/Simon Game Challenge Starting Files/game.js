buttonColors = ["red","blue","green","yellow"];

gamePattern = [];


function nextSequence()
{
    const randomNumber  = (Math.floor(Math.random()*4));
    const randomChosenColour = buttonColors(randomNumber);
    gamePattern.push(randomChosenColour);
}

//animation
$(".btn.red").on("click",function(){
    $(".btn.red").fadeOut(100).fadeIn(100)
});

$(".btn.green").on("click",function(){
    $(".btn.green").fadeOut(100).fadeIn(100)
});

$(".btn.blue").on("click",function(){
    $(".btn.blue").fadeOut(100).fadeIn(100)
});

$(".btn.yellow").on("click",function(){
    $(".btn.yellow").fadeOut(100).fadeIn(100)
});

//sound
const blueSound = "sounds/blue.mp3";
const greenSound = "sounds/green.mp3";
const redSound = "sounds/red.mp3";
const wrongSound = "sounds/wrong.mp3";
const yellowSound = "sounds/yellow.mp3";

function playSound(soundPath)
{
    const simonAudio = new Audio(soundPath);
    simonAudio.play();
}

$(".btn.red").on("click",function(){
    playSound(redSound);
});

$(".btn.blue").on("click",function(){
    playSound(blueSound);
});

$(".btn.green").on("click",function(){
    playSound(greenSound);
});

$(".btn.wrong").on("click",function(){
    playSound(wrongSound);
});

$(".btn.yellow").on("click",function(){
    playSound(yellowSound);
});

// Step 3: Create a new empty array called userClickedPattern
var userClickedPattern = [];

// Step 1: Use jQuery to detect button clicks and trigger a handler function
$(".btn").on("click", function () {
    // Step 2: Get the id of the clicked button and store it in userChosenColour variable
    var userChosenColour = $(this).attr("id");
    
    // Step 4: Add userChosenColour to the end of userClickedPattern array
    userClickedPattern.push(userChosenColour);

    // Logging the userClickedPattern array to the console
    console.log(userClickedPattern);
});

function animatePress(currentColor) {
    $( currentColor).addClass("pressed");
    setTimeout(function () {
      $( currentColor).removeClass("pressed");
    }, 100);
  }
