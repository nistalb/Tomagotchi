
let babyfood = ["peas", "creamed corn"];
let hunger = 0;
let boredom = 0;
let sleep = 0;

//create the start button that will begin the game and append to the screen
let $startButton = $("<button id = 'start'>Start Game</button>")
$("#notice-screen").append($startButton);

//initialize the image on the game-screen
let $egg = $("<img id='baby-unicorn' src = 'https://www.aurorawings.com/uploads/9/3/5/0/9350138/s175561970794400002_p621_i210_w798.jpeg' alt = 'baby unicorn'>");
$("#game-screen").append($egg);


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

//this function will collect pets name and print onto the screen
let petName = "";

const getName = function getName() {
    let $name = $("<input><button id = 'pet-name'>Enter your pet's name</button></input>")
    $("#notice-screen").append($name);
    $("#pet-name").on("click", function(event){
        petName = $("input").val();
        $($name).remove();
        $("#notice-screen").append(`Your new pet ${petName} has been born!`);
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
    $("#hunger").text(hunger);  
}

const decrementHunger = function decrementHunger(hunger){
    hunger = hunger - 3;
    if (hunger > 0) {
        $("#hunger").text(hunger);
    } else {
        hunger = 0;
        $("#hunger").text(hunger);
    }
}

//this function increments sleepiness
const incrementSleepiness = function incrementSleepiness(sleep){
    sleep++;
    $("#sleepiness").text(sleep);  
}

const decrementSleepiness = function decrementSleepiness(sleep){
    sleep = sleep - 5;
    if (sleep > 0) {
        $("#sleepiness").text(sleep); 
    } else {
        sleep = 0;
        $("#sleepiness").text(sleep);
    } 
}

//this function increments boredom
const incrementBoredom = function incrementBoredom(bored){
    bored++;
    $("#boredom").text(bored);  
}

const decrementBoredom = function decrementBoredom(bored){
    bored = bored - 4;
    if (bored > 0) {
        $("#boredom").text(bored); 
    } else {
        bored = 0;
        $("#boredom").text(bored);
    }
}


let time = 120;
    const setTimer = function setTimer(hunger, boredom, sleep, interval){
        const updateTime = function updateTime(){
            $("#time").text(time);
            time--;
            if(time % interval === 0){
                hunger++
                boredom++
                sleep++
                incrementBoredom(boredom);
                incrementHunger(hunger);
                incrementSleepiness(sleep);
            }
            if (time <= 0){
                clearInterval(timer);
                lifecycle++;
                if (lifecycle <= 4){
                    playGame();
                }
            }
        }
        const timer = setInterval(updateTime, 1000);
}

const babyPet = function babyPet() {
    let hunger = 0;
    let boredom = 0;
    let sleep = 0;
    interval = 5;
   
    setTimer(hunger, boredom, sleep, interval)
    }

let lifecycle = 1;

const playGame = function playGame (){
    if (lifecycle === 1) {
        babyPet ();
        time = 120;
    }    
}

//NOTE address my variables issue
$("#feed").on("click", function (event){
    console.log("being fed")
    decrementHunger(hunger);
})