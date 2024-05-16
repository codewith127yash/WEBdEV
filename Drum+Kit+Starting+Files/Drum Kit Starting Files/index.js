// Sounds for each drum class (replace with your file paths)
const tom1Sound = "sounds/tom-1.mp3";
const tom2Sound = "sounds/tom-2.mp3";
const tom3Sound = "sounds/tom-3.mp3";
const tom4Sound = "sounds/tom-4.mp3";
const snareSound = "sounds/snare.mp3";
const crashSound = "sounds/crash.mp3";
const kickBassSound = "sounds/kick-bass.mp3";

// Function to play a sound based on its file path
function playSound(soundPath) {
  const drumAudio = new Audio(soundPath);
  drumAudio.play();
}

// Function to add and remove "pressed" class for button animation
function buttonAnimation(drumElement) {
  drumElement.classList.add("pressed");
  setTimeout(function() {
    drumElement.classList.remove("pressed");
  }, 100);
}

// Click event listeners for each drum element
const wDrum = document.querySelector(".w.drum");
wDrum.addEventListener("click", function() {
  playSound(tom1Sound);
  buttonAnimation(wDrum);
});

const aDrum = document.querySelector(".a.drum");
aDrum.addEventListener("click", function() {
  playSound(tom2Sound);
  buttonAnimation(aDrum);
});

const sDrum = document.querySelector(".s.drum");
sDrum.addEventListener("click", function() {
  playSound(tom3Sound);
  buttonAnimation(sDrum);
});

const dDrum = document.querySelector(".d.drum");
dDrum.addEventListener("click", function() {
  playSound(tom4Sound);
  buttonAnimation(dDrum);
});

const jDrum = document.querySelector(".j.drum");
jDrum.addEventListener("click", function() {
  playSound(snareSound);
  buttonAnimation(jDrum);
});

const kDrum = document.querySelector(".k.drum");
kDrum.addEventListener("click", function() {
  playSound(crashSound);
  buttonAnimation(kDrum);
});

const lDrum = document.querySelector(".l.drum");
lDrum.addEventListener("click", function() {
  playSound(kickBassSound);
  buttonAnimation(lDrum);
});

// Keydown event listener for keyboard interaction
document.addEventListener("keydown", function(event) {
  const key = event.key;
  switch (key) {
    case "w":
      playSound(tom1Sound);
      buttonAnimation(wDrum); // Assuming visual feedback for the corresponding drum element
      break;
    case "a":
      playSound(tom2Sound);
      buttonAnimation(aDrum);
      break;
      case "s":
      playSound(tom3Sound);
      buttonAnimation(sDrum);
      break;
      case "d":
      playSound(tom4Sound);
      buttonAnimation(dDrum);
      break;
      case "j":
      playSound(snareSound);
      buttonAnimation(jDrum);
      break;
      case "k":
      playSound(crashSound);
      buttonAnimation(kDrum);
      break;
      case "l":
      playSound(kickBassSound);
      buttonAnimation(lDrum);
      break;
  
    default:
      console.log("Invalid key pressed:", key);
  }
});

// Optional click event listener for "set" button (assuming it has class "set")
// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");
// }
