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
var randNum = getRndInteger(19,121);
$('#ranDisplay').append(randNum);

// variables to store the random numbers 1-12 for crystals
var blueNum = getRndInteger(1,13);
var greenNum = getRndInteger(1,13);
var purpNum = getRndInteger(1,13);
var redNum = getRndInteger(1,13);

// Creates var for total score
var totalScore = 0;


// click functionality for the blue crystal
// Adjusts the score once clicked and displays to the page
$('#blue').click(function () {
    totalScore += blueNum;
    $('#totalScore').text(totalScore);
});

// click functionality for the green crystal
$('#green').click(function () {
    totalScore += greenNum;
    $('#totalScore').text(totalScore);
});

// click functionality for the purple crystal
$('#purple').click(function () {
    totalScore += purpNum;
    $('#totalScore').text(totalScore);
});

// click functionality for the red crystal
$('#red').click(function () {
    totalScore += redNum;
    $('#totalScore').text(totalScore);
});



// adds wins and loses to the screen
$('#scores').apeend(wins);
$('#scores').apeend(wins);
