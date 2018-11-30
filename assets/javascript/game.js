addEventListener

// Array of crystals 
var crystals = ['blue', 'green', 'purple', 'red'];

// For loop to add images to screen
for (var i = 0; i < crystals.length; i++) {
    var imgtag = $("<img>");

    imgtag.addClass('Crystal-image');

    var idsource = crystals[i];
    imgtag.attr('id', idsource);

    // This will place the source as the name of the character
    var source = 'assets/images/' + crystals[i] + '.jpg';
    imgtag.attr("src", source);

    // Adds images to the div
    $("#crystals").append(imgtag);
};

// function to generate a random number between the min and max when called
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Creates a random number between 19-120 and displays to page
var randNum;
function RanGen() {
    randNum = getRndInteger(19, 121);
    $('#ranDisplay').html(randNum);
}
RanGen();

// variables to store the random numbers for crystals
var blueNum;
var greenNum;
var purpNum;
var redNum;

// Function to assign random number from 1 to 12 to each crystal
function ColorNums() {
    blueNum = getRndInteger(1, 13);
    greenNum = getRndInteger(1, 13);
    purpNum = getRndInteger(1, 13);
    redNum = getRndInteger(1, 13);
}
ColorNums();

// Creates var for total score
var scoreText = 'Your total score is:'
var totalScore = 0;

// Creats var for wins and loses
var Wins = 0;
var Loses = 0;

// function to check the score and display if a win or a loss occurs
function checkScore() {
    if (totalScore == randNum) {
        Wins++;
        $('#scores').html('<br>' + 'Wins:' + Wins + '<br>');
        $('#scores').append('<br>' + 'Loses:' + Loses + '<br>');
        ColorNums();
        RanGen();
        totalScore = 0;
    }
    else if (totalScore > randNum) {
        Loses++;
        $('#scores').html('<br>' + 'Wins:' + Wins + '<br>');
        $('#scores').append('<br>' + 'Loses:' + Loses + '<br>');
        ColorNums();
        RanGen();
        totalScore = 0;
    }
}

// adds wins and loses to the screen
$('#scores').append('<br>' + 'Wins:' + Wins + '<br>');
$('#scores').append('<br>' + 'Loses:' + Loses + '<br>');

// click functionality for the blue crystal
// Adjusts the score once clicked and displays to the page
$('#blue').click(function () {
    totalScore += blueNum;
    $('#totalScore').text(scoreText + totalScore);
    checkScore();
});

// click functionality for the green crystal
$('#green').click(function () {
    totalScore += greenNum;
    $('#totalScore').text(scoreText + totalScore);
    checkScore();
});

// click functionality for the purple crystal
$('#purple').click(function () {
    totalScore += purpNum;
    $('#totalScore').text(scoreText + totalScore);
    checkScore();
});

// click functionality for the red crystal
$('#red').click(function () {
    totalScore += redNum;
    $('#totalScore').text(scoreText + totalScore);
    checkScore();
});
