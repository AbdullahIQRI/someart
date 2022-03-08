//Detecting Button Press
for(var i=0;i<document.querySelectorAll(".drum").length;i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
        {
            var tom1=new Audio("sounds/meow.mp3");
            tom1.play();
            break;
        }
        case "a":
        {
            var tom2=new Audio("sounds/Ruff.mp3");
            tom2.play();
            break;
        }
        case "s":
        {
            var tom3=new Audio("sounds/hehe.mp3");
            tom3.play();
            break;
        }
        case "d":
        {
            var tom4=new Audio("sounds/doo-doo.mp3");
            tom4.play();
            break;
        }
        case "j":
        {
            var snare=new Audio("sounds/OKIE.mp3");
            snare.play();
            break;
        }
        case "k":
        {
            var crash=new Audio("sounds/QUACK.mp3");
            crash.play();
            break;
        }
        case "l":
        {
            var kickBass=new Audio("sounds/HUFFY.mp3");
            kickBass.play();
            break;
        }
    
        default:
        {
            console.log(this.innerHTML);
            break;
        }
    }
}

function buttonAnimation(key) {
    var activeKey=document.querySelector("."+key);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}