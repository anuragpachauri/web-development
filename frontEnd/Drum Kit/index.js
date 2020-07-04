var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    listener(buttonInnerHTML);

    buttonani(buttonInnerHTML);

  });

}
document.addEventListener("keydown",function (alert){

      listener(alert.key);

      buttonani (alert.key);

})
function listener(valuee)
{
    switch (valuee) {
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
            var crash1 = new Audio("sounds/crash.mp3");
            crash1.play();
            break; 

        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break; 

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;    

        default:
            alert("wrong value")
            break;
    }
}
function buttonani (currentkey)
{
var activebutton = document.querySelector("." + currentkey);
 activebutton.classList.add("pressed");
 setTimeout(function(){
     activebutton.classList.remove("pressed");
 },100);
}