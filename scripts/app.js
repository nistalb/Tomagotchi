/* NOTE global variables */
let hunger = 0;
let bored = 0;
let sleep = 0;
let lifecycle = 0;
let petName = "";
let time = 120;
let age = ["a Baby", "a Child", " a Teenager", "an Adult", "dead"];


/* NOTE Event Listeners */

//create an event listener for the start button, and initiate getName function 
$("#start_button").on("click", function (event){
    console.log("the game is starting")
    $("#start_button").remove();
    getName();
})

//create an event listner for the feed button, and intiate decremetHunger and feedTime functions
$("#feed").on("click", function (event){
    console.log("being fed")
    decrementHunger();
    feedTime();
})

//create an event listner for the sleep button, and intiate decremetSleepiness and sleepTime functions
$("#sleep").on("click", function (event){
    console.log("sleeping")
    decrementSleepiness();
    sleepTime();

})

//create an event listner for the play button, and intiate decremetBoredom and playTime functions
$("#play").on("click", function (event){
    console.log("playing")
    decrementBoredom();
    playTime();
})

/* NOTE Functions */

/**
 * Toggles between the game screen and the notice screen. Whichever screen is active will be replaced by the other screen.
 */
const switchScreens = function(){
    let $noticeScreen = $("#notice_screen");
    let $gameScreen = $("#game_screen")
    if ($noticeScreen.css("visibility") === "hidden"){
        $noticeScreen.css("visibility", "visible");
        $gameScreen.css("visibility", "hidden");
    } else {
        $gameScreen.css("visibility", "visible");
        $noticeScreen.css("visibility", "hidden");
    }    
}

/**
 * Appends an input and button to the notice screen.  Adds an event listener for the added button that will add a paragraph to the notice screen that the pet has been born.
 */
const getName = function getName() {
    let $name = $("<input><button id = 'pet-name'>Enter your pet's name</button></input>")
    $("#notice_screen").append($name);
    $("#pet-name").on("click", function(event){
        petName = $("input").val();
        $($name).remove();
        $("#notice_screen").append(`<p class = 'message'>Your new pet ${petName} has been born!</p>`);
        delayTimer(switchScreens, 3);
        delayTimer(playGame, 2);
    });
};

//this function will create a delay timer for switching screens
/**
 * Creates a delay prior to executing a function
 * @param {function} funct the function to be delayed
 * @param {number} seconds the amound of time in seconds to delay
 */
const delayTimer = function delayTimer(funct, seconds){
    setTimeout(funct, seconds * 1000);
}

/**
 * Increments the hunger variable up by one and updates the text of the span displayed in the header with id hunger with the new value of hunger
 */
const incrementHunger = function incrementHunger(){
    hunger++;
    $("#hunger").text(hunger);  
}

/**
 * Decrements the hunger variable by 3 and updates the text of the span displayed in the header with id hunger with the new value of hunger
 */
const decrementHunger = function decrementHunger(){
    hunger = hunger - 3;
    if (hunger > 0) {
        $("#hunger").text(hunger);
    } else {
        hunger = 0;
        $("#hunger").text(hunger);
    }
}

/**
 * Increments the sleep variable up by one and updates the text of the span displayed in the header with id sleepiness with the new value of sleep
 */
const incrementSleepiness = function incrementSleepiness(){
    sleep++;
    $("#sleepiness").text(sleep);  
}

/**
 * Decrements the sleep variable by 5 and updates the text of the span displayed in the header with id sleepiness with the new value of sleep
 */
const decrementSleepiness = function decrementSleepiness(){
    sleep = sleep - 5;
    if (sleep > 0) {
        $("#sleepiness").text(sleep); 
    } else {
        sleep = 0;
        $("#sleepiness").text(sleep);
    } 
}

/**
 * Increments the bored variable up by one and updates the text of the span displayed in the header with id boredom with the new value of bored
 */
const incrementBoredom = function incrementBoredom(){
    bored++;
    $("#boredom").text(bored);  
}

/**
 * Decrements the bored variable by 4 and updates the text of the span displayed in the header with id boredom with the new value of bored
 */
const decrementBoredom = function decrementBoredom(){
    bored = bored - 4;
    if (bored > 0) {
        $("#boredom").text(bored); 
    } else {
        bored = 0;
        $("#boredom").text(bored);
    }
}

/**
 * Plays audio of eating sounds
 */
    const feedTime = function feedTime(){
        let audio = document.getElementById("audio");
        audio.play();
    }

/**
 * Adds a class to the div that holds the pet image.  With the added class CSS displays an image that does not have animation.  the changed image lasts for three seconds. 
 */
    const sleepTime = function sleepTime(){
        let $sleeper = $("#game_screen div");
        $sleeper.attr("class", "sleep");
        setTimeout(() => $sleeper.removeClass("sleep"), 3000);
    }

/**
 * Replaces the default image of the pet with the playing pet.
 * Clones the child element of game_screen and saves it.  Then removes the child element and replaces it with another element that has a different Id, thereby calling a new CSS animation.  The new animation plays for 3 seconds and then is replaced by the saved cloned element. 
 */
const playTime = function playTime(){
    if (lifecycle === 0){
        let $player = $("#game_screen div");
        let save = $player.clone();
        $player.remove();
        let $playing = $("<div id = 'baby_play'></div>");
        $("#game_screen").append($playing);
        const swap = function swap() {
            $($playing).remove();
            $("#game_screen").append(save)
        };
        setTimeout(swap , 3000);
    } else {if (lifecycle === 1){
        let $player = $("#game_screen div");
        let save = $player.clone();
        $player.remove();
        let $playing = $("<div id = 'child_play'></div>");
        $("#game_screen").append($playing);
        const swap = function swap() {
            $($playing).remove();
            $("#game_screen").append(save)
        };
        setTimeout(swap , 3000);
    } else if (lifecycle === 2) {
        let $player = $("#game_screen div");
        let save = $player.clone();
        $player.remove();
        let $playing = $("<div id = 'teen_play'></div>");
        $("#game_screen").append($playing);
        const swap = function swap() {
            $($playing).remove();
            $("#game_screen").append(save)
        };
        setTimeout(swap , 3000);
    } else if (lifecycle === 3) {
        let $player = $("#game_screen div");
        let save = $player.clone();
        $player.remove();
        let $playing = $("<div id = 'adult_play'></div>");
        $("#game_screen").append($playing);
        const swap = function swap() {
            $($playing).remove();
            $("#game_screen").append(save)
        };
        setTimeout(swap , 3000);
    }
    }
}

/**
 * Executes the timing for the game.  Counts down the time variable every second.  Calls functions incrementBoredom, incrementHunber, and incrementSleepiness after a given interval.  Monitors the status of hunger, bored, and sleep variables and executes the deadPet function if any of the variables reach 10.  
 * When time has reached zero the pet lifecyle will increment and the game will continue until all lifecycles have been reached.
 * @param {number} interval the time value used to increment hunger, boredom, and sleepiness
 * @author This code was borrowed from Dalton Hart
 */
    const setTimer = function setTimer(interval){
        const updateTime = function updateTime(){
            time--;
            if(time % interval === 0){
                incrementBoredom();
                incrementHunger();
                incrementSleepiness();
            }
            if (hunger === 10 || bored === 10 || sleep === 10) {
                deadPet();
                clearInterval(timer);
            }
            if (time <= 0){
                clearInterval(timer);
                lifecycle++;
                if (lifecycle <= 5){
                   playGame();
                }
            }
        }
        const timer = setInterval(updateTime, 1000);
}

/**
 * Sets variables for the babyPet, updates the header_string with text, and calls the setTimer function
 */
const babyPet = function babyPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 6;
    time = 120;

    $("#header_string").text(`${petName} is ${age[lifecycle]}`);

    setTimer(interval)
    }

/**
 * Sets variables for the childPet, cleares the notice_screen text and replaces it with new text, then switches screens so that the notice screen is visible.  While the notice screen is visibler the image of the pet is being added to the game_screen.  After three seconds of notice screen the game screen with hte pet will become visible and header_string will update.  Lastly, calls the setTimer function
 */
const childPet = function childPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 7;
    time = 120;

    $("#notice_screen").text("");
    $("#notice_screen").append(`<p class = "message">${petName} has become ${age[lifecycle]}!</p>`);
    switchScreens();

    let $pet = $("#baby_img");
    $pet.attr("id", "child_img");
    
    delayTimer(switchScreens, 3);
    $("#header_string").text(`${petName} is ${age[lifecycle]}`);
    setTimer(interval)
    }

const teenPet = function teenPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 8;
    time = 120;
    
    $("#notice_screen").text("");
    $("#notice_screen").append(`<p class = "message">${petName} has become ${age[lifecycle]}!</p>`);
    switchScreens();

    let $pet = $("#child_img");
    $pet.attr("id", "teen_img");
   
    delayTimer(switchScreens, 3);
    $("#header_string").text(`${petName} is ${age[lifecycle]}`);
    setTimer(interval)
    }

const adultPet = function adultPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 9;
    time = 120;
    
    $("#notice_screen").text("");
    $("#notice_screen").append(`<p class = "message">${petName} has become ${age[lifecycle]}!</p>`);
    switchScreens();

    let $pet = $("#teen_img");
    $pet.attr("id", "adult_img");
    delayTimer(switchScreens, 3);
    $("#header_string").text(`${petName} is ${age[lifecycle]}`);
    setTimer(interval)
    }

const deadPet = function deadPet() {
    $("#notice_screen").text("");
    $("#notice_screen").append(`<p class = "message">${petName} is dead!</p>`);
    switchScreens();

    let $pet = $("#game_screen div");
    $pet.attr("id", "dead_img");
    
    let $resetButton = $("<button>Reset Game</button>");
    $("#game_screen").append($resetButton);
    delayTimer(switchScreens, 3);
    $("#header_string").text(`${petName} is dead`);
    $resetButton.on("click", function () {
        document.location.reload()
    })
}

/**
 * Cycles through the game based on lifcycle
 */
const playGame = function playGame (){
    if (lifecycle === 0) {
        babyPet ();
        
    }  else if (lifecycle === 1) {
        childPet()
        
    }  else if (lifecycle === 2) {
       teenPet();
    
    }   else if (lifecycle === 3) {
        adultPet();
        
    } else {
        deadPet();
    } 
}

