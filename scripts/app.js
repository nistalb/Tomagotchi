/* NOTE global variables */
let hunger = 0;
let bored = 0;
let sleep = 0;
let lifecycle = 1;
let petName = "";
let time = 120;


//initialize the image on the game-screen
let $egg = $("<img id='baby-img' src = 'https://www.aurorawings.com/uploads/9/3/5/0/9350138/s175561970794400002_p621_i210_w798.jpeg' alt = 'baby'>");
$("#game-screen").append($egg); 

/* NOTE Event Listeners */

//create the event listener that will tell when the start button is pushed
$("#start").on("click", function (event){
    console.log("the game is starting")
    $("#start").remove();
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
const getName = function getName() {
    let $name = $("<input><button id = 'pet-name'>Enter your pet's name</button></input>")
    $("#notice-screen").append($name);
    $("#pet-name").on("click", function(event){
        petName = $("input").val();
        $($name).remove();
        $("#notice-screen").append(`Your new pet ${petName} has been born!`);
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
            //$("#time").text(time);   not used at this time
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

    setTimer(interval)
    }

const childPet = function childPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 7;
    
    setTimer(interval)
    }

const teenPet = function teenPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 6;
    
    setTimer(interval)
    }

const adultPet = function adultPet() {
    hunger = 0;
    bored = 0;
    sleep = 0;
    interval = 8;
    
    setTimer(interval)
    }

const deadPet = function deadPet() {
    $("#notice-screen").text("");
    $("#notice-screen").append(`${petName} has died!`);
    switchScreens();

    let $dead = $("<img id='dead-img' src = 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/07/12/dead-1594574777.jpg?itok=yxQ8zz2z' alt = 'teen'>");

    $("#game-screen img:last-child").remove();
    $("#game-screen").append($dead);
    let $resetButton = $("<button>Reset Game</button>");
    $("#game-screen").append($resetButton);
    delayTimer(switchScreens, 3);
    $resetButton.on("click", function () {
        document.location.reload()
    })
}

const playGame = function playGame (){
    if (lifecycle === 1) {
        console.log("baby");
        babyPet ();
        time = 120;
    }  else if (lifecycle === 2) {
        $("#notice-screen").text("");
        $("#notice-screen").append(`${petName} has become a child!`);
        switchScreens();

        let $child = $("<img id='child-img' src = 'https://gradepowerlearning.com/wp-content/uploads/2018/06/what-type-of-learner-is-your-child-min-860x420.jpeg' alt = 'child'>");

        $("#game-screen img:last-child").remove();
        $("#game-screen").append($child);
        delayTimer(switchScreens, 3);
        delayTimer(childPet, 2);
        time = 120;
    }  else if (lifecycle === 3) {
        $("#notice-screen").text("");
        $("#notice-screen").append(`${petName} has become a teen!`);
        switchScreens();

        let $teen = $("<img id='teen-img' src = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/How_to_Get_Teen_Boys_to_Open_Up_300_200_int_c1-1x.jpg' alt = 'teen'>");

        $("#game-screen img:last-child").remove();
        $("#game-screen").append($teen);
        delayTimer(switchScreens, 3);
        delayTimer(teenPet, 2);
        time = 120;
    }   else if (lifecycle === 4) {
        $("#notice-screen").text("");
        $("#notice-screen").append(`${petName} has become an Adult!`);
        switchScreens();

        let $adult = $("<img id='adult-img' src = 'http://www.jovanortho.com/common/pages/UserFile.aspx?fileId=69074' alt = 'adult'>");

        $("#game-screen img:last-child").remove();
        $("#game-screen").append($adult);
        delayTimer(switchScreens, 3);
        delayTimer(adultPet, 2);
        time =120;
    } else {
        deadPet();
    } 
}

