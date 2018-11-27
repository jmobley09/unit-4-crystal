// Array of crystals 
var crystals = ['blue', 'green', 'purple', 'red'];

// For loop to add images to screen
 for (var i = 0; i < crystals.length; i++) {
    var imgtag = $("<img>");

    imgtag.addClass('Crystal-image');

    // This will place the source as the name of the character
    var source = 'assets/images/' + crystals[i] + '.jpg';
    imgtag.attr("src", source);

    // Adds images to the div
    $("#crystals").append(imgtag);
 };

var randNum = Math.floor(Math.random() * 100) + 19;
$('#ranDisplay').append(randNum);
 $('.Crystal-image').click();