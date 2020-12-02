
let babyfood = ["peas", "creamed corn"];

//create the start button that will begin the game
let $startButton = $("<button id = 'start'>Start Game</button>")
$("#notice-screen").append($startButton);

//create the event listener that will tell when the start button is pushed
$("#start").on("click", function (event){
    console.log("the game is starting")
    $("#start").remove();
    getName();
})


//this will swicth between the game screen and the notice screen
const switchScreens = function(){
    let $noticeScreen = $("#notice-screen");
    let $gameScreen = $("#game-screen")
    if ($noticeScreen.css("visibility") === "hidden"){
        $noticeScreen.css("visibility", "visible");
        $gameScreen.css("visibility", "hidden");
    } else {
        $gameScreen.css("visibility", "visible");
        $noticeScreen.css("visibility", "hidden");
    }    
}

//this function will collect name and print onto the screen
let petName = "";

const getName = function getName() {
    let $name = $("<input><button id = 'pet-name'>Enter your pet's name</button></input>")
    $("#notice-screen").append($name);
    $("#pet-name").on("click", function(event){
        petName = $("input").val();
        $($name).remove();
        $("#notice-screen").append(`Your new pet ${petName} is about to hatch!`);
        delayTimer(3);
    });
};

//this function will create a delay timer for switching screens
const delayTimer = function delayTimer(seconds){
    setTimeout(switchScreens, seconds * 1000);
}

//this function increments hunger
const incrementHunger = function incrementHunger(hunger){
    hunger++;
    $("#hunger").text(`Hunger: ${hunger}`);  
}

//this function increments sleepiness
const incrementSleepiness = function incrementSleepiness(sleep){
    sleep++;
    $("#sleepiness").text(`Sleepiness: ${sleep}`);  
}

//this function increments boredom
const incrementBoredom = function incrementBoredom(bored){
    bored++;
    $("#boredom").text(`Boredom: ${bored}`);  
}

