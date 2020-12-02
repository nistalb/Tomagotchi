
let babyfood = ["peas", "creamed corn"];

//create the start button that will begin the game
let $startButton = $("<button id = 'start'>Start Game</button>")
$("#notice-screen").append($startButton);

//create the event listener that will tell when the start button is pushed
$("#start").on("click", function (event){
    console.log("the game is starting")
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

//this function will collect name
let petName = "";

const getName = function getName() {
    $("#notice-screen").append("<input><button id = 'pet-name'>Enter your pet's name</button></input>");
    $("#pet-name").on("click", function(event){
        petName = $("input").val();
    });
    
};
