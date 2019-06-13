// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Kart Variables (each of these will be within an object)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


var kart = {

    mario: {
        name: "Mario",
        value: 0
    },
    peach: {
        name: "Peach",
        value: 0
    },
    yoshi: {
        name: "Yoshi",
        value: 0
    },
    bowser: {
        name: "Bowser",
        value: 0
    },

};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Display Number and User Guess (to keep track)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var displayNum  = 0;
var userGuess   = 0;


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Display Win/Loss Count (to keep track)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var winCount    = 0;
var lossCount   = 0;


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Functions - These are the "actions" that occur when a user clicks
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Function for getting random numbers:  
var findRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function starts and restarts the game:
var startGame = function () {

    // Reset the userGuess for reset of game:
    userGuess = 0;

    // Set new displayNum between 19-120
    displayNum = findRandomNumber (19,120)

    // Set different values for each crystal 1-12
    kart.mario.value = findRandomNumber(1,12);
    kart.peach.value = findRandomNumber(1,12);
    kart.yoshi.value = findRandomNumber(1,12);
    kart.bowser.value = findRandomNumber(1,12);

    // Change html to reflect above changes so user can see
    $("#displayNum").html(displayNum);
    $("#userGuess").html(userGuess);
}

// Function for userGuess input changes 
var addKartValues = function (kart) {
    userGuess = userGuess + kart.value;
    checkWinLoss();
    $("#userGuess").html(userGuess);

}
 
// Check if user wins or loses game
var checkWinLoss = function () {

    // Check if userGuess is larger than displayNum
    if (userGuess > displayNum) {
        lossSound.play();
        alert("You Lose!");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame ();

    // This is to check if userGuess is equal to displayNum
    } else if (userGuess === displayNum) {

        var winSound = document.getElementById("winSound")
        winSound.play();
        alert("You win!");
        winCount++;
        $("#winCount").html(winCount);
        startGame ();

    }

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Action Items
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  Function needed to start the game:
startGame ();


 //  Kart events:
$("#mario").click(function() {
    addKartValues(kart.mario);
});
$("#peach").click(function() {
    addKartValues(kart.peach);
});
$("#yoshi").click(function() {
    addKartValues(kart.yoshi);
});
$("#bowser").click(function() {
    addKartValues(kart.bowser);
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Sound Effect Functions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Coin Sound
var clickAudio = function () {
      audio = document.getElementById('coinSound');
      audio.play();
    };

// Win Sound
var clickWin = function () {
    win = document.getElementById('winSound');
    win.play();
};

// Loss Sound
var clickLoss = function () {
        loss = document.getElementById('lossSound');
        loss.play();
};


    
    
