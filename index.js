document.addEventListener("DOMContentLoaded", function() {


  //// CLICK REACTION ////
  var numbersOfButtons = document.querySelectorAll(".drum").length;

  for (n = 0; n < numbersOfButtons; n++) {
    document.querySelectorAll(".drum")[n].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
  }

  //// KEYBOARD REACTION ////

  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  //// FUNCTION ////

  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var tom0 = new Audio("sounds/tom-0.mp3");
        tom0.play();
        break;

      case "k":
        var tom5 = new Audio("sounds/tom-5.mp3");
        tom5.play();
        break;

      case "l":
        var tom6 = new Audio("sounds/tom-6.mp3");
        tom6.play();
        break;

      default:
        console.log(key);
    }
  }


//// Animacja buttona ////

function buttonAnimation (currentButton) {
  var activeButton = document.querySelector("." + currentButton);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}

});
