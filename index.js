var NumOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);


    });

}

document.addEventListener("keypress", function (event) {

    makesound(event.key)


});

function makesound(key) {
    switch (key) {
        case "w":
            var tome1 = new Audio('sounds/tom-1.mp3');
            tome1.play();
            break;
        case "a":
            var tome2 = new Audio('sounds/tom-2.mp3');
            tome2.play();
            break;
        case "s":
            var tome3 = new Audio('sounds/tom-3.mp3');
            tome3.play();
            break;
        case "d":
            var tome4 = new Audio('sounds/tom-4.mp3');
            tome4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }

}



// var audio = new Audio('audio_file.mp3');
// audio.play();

