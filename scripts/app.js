/* NOTE global variables */
let hunger = 0;
let bored = 0;
let sleep = 0;
let lifecycle = 0;
let petName = "";
let time = 10;
let age = ["a Baby", "a Child", " a Teenager", "an Adult", "dead"];


/* NOTE Event Listeners */

//create the event listener that will tell when the start button is pushed
$("#start_button").on("click", function (event){
    console.log("the game is starting")
    $("#start_button").remove();
    getName();
})

//this click will feed the pet
$("#feed").on("click", function (event){
    console.log("being fed")
    decrementHunger();
})

//this click will sleep the pet
$("#sleep").on("click", function (event){
    console.log("sleeping")
    decrementSleepiness();
})

//this click will play the pet
$("#play").on("click", function (event){
    console.log("playing")
    decrementBoredom();
})

/* NOTE Functions */

//this will swicth between the game screen and the notice screen
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

//this function will collect pets name and print onto the screen
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
const delayTimer = function delayTimer(funct, seconds){
    setTimeout(funct, seconds * 1000);
}

//this function increments hunger
const incrementHunger = function incrementHunger(){
    hunger++;
    $("#hunger").text(hunger);  
}

const decrementHunger = function decrementHunger(){
    hunger = hunger - 3;
    if (hunger > 0) {
        $("#hunger").text(hunger);
    } else {
        hunger = 0;
        $("#hunger").text(hunger);
    }
}

//this function increments sleepiness
const incrementSleepiness = function incrementSleepiness(){
    sleep++;
    $("#sleepiness").text(sleep);  
}

const decrementSleepiness = function decrementSleepiness(){
    sleep = sleep - 5;
    if (sleep > 0) {
        $("#sleepiness").text(sleep); 
    } else {
        sleep = 0;
        $("#sleepiness").text(sleep);
    } 
}

//this function increments boredom
const incrementBoredom = function incrementBoredom(){
    bored++;
    $("#boredom").text(bored);  
}

const decrementBoredom = function decrementBoredom(){
    bored = bored - 4;
    if (bored > 0) {
        $("#boredom").text(bored); 
    } else {
        bored = 0;
        $("#boredom").text(bored);
    }
}

//sets the time for the game and executes time based actions
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

const babyPet = function babyPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 5;
    time = 10;

    $("#header_string").text(`${petName} is ${age[lifecycle]}`);

    setTimer(interval)
    }

const childPet = function childPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 7;
    time = 10;

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
    interval = 6;
    time = 10;
    
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
    interval = 8;
    time = 10;
    
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
    $("#notice_screen").append(`<p class = "message">${petName} is ${age[lifecycle]}!</p>`);
    switchScreens();

    let $pet = $("#adult_img");
    $pet.attr("id", "dead_img");
    
    let $resetButton = $("<button>Reset Game</button>");
    $("#game_screen").append($resetButton);
    delayTimer(switchScreens, 3);
    $("#header_string").text(`${petName} is ${age[lifecycle]}`);
    $resetButton.on("click", function () {
        document.location.reload()
    })
}

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

