var gameScore = {
    wins: 0,
    loss: 0,
    ties: 0
}


var playGame = function () {
    // Ask user for their choice
    var userChoice = window.prompt("Enter R, P, or S:");

    // If user pressed Cancel, immediately end function
    if (!userChoice) {
        return;
    }

    userChoice = userChoice.toUpperCase();

    // if (userChoice != "R" || userChoice != "P" || userChoice != "S") {
    //     window.alert("that's not a proper choice");
    //     return;
    // }

    var gameChoices = ["R", "P", "S"];


    if (!gameChoices.includes(userChoice)) {
        window.alert("That's not a proper choice");
        {
            if (window.confirm("Play once more?")) {
                playGame();
                return;
            }
            else {
                window.alert("Player cancelled game")
                return;
            }
        }
    }


    var computerChoice = gameChoices[Math.floor((Math.random() * gameChoices.length))];

    window.alert("The computer chose " + computerChoice);

    var arr = ["RS", "SP", "PR"];
    var finalOutput = userChoice + computerChoice;

    if (arr.indexOf(finalOutput) !== -1) {

    }
    if (arr.includes(finalOutput)) {

    }
    if (
        (userChoice == "R" && computerChoice == "S") ||
        (userChoice == "S" && computerChoice == "P") ||
        (userChoice == "P" && computerChoice == "R")
    ) {
        gameScore.wins++
        alert("You win! Your score is " + gameScore.wins);
    }
    else if (userChoice === computerChoice) {
        gameScore.ties++
        alert("It's a tie! Your score is " + gameScore.ties);
    }
    else {
        gameScore.loss++
        alert("Too bad, you lost.  Your score is " + gameScore.loss)
    }


    // if(samechoice) {
    //     draw
    // }  else {
    //     if(winchoice) {

    //     } else {
    //         //loss
    //     }
    //     //wind or loss
    // }

    window.alert(
        "Stats:\nWins: " + gameScore.wins + "\nLosses: " + gameScore.loss + "\nTies: " + gameScore.ties
    );



    if (window.confirm("Play again?")) {
        playGame();
    }

    // var playAgain = window.confirm("Play again?");

    // if (playAgain) {
    //     playGame();
    // }
}
playGame();


