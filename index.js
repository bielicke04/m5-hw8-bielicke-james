// Create an Array of at least 3 losing messages

    var loser = [
        "Nope. Not even close.",
        "Hello? Anybody home?",
        "Do you even have a pulse?"
    ];

    //console.log(loser);


// Create variables to count wins and losses

    var winsTotal = 0
    var losesTotal = 0

    //console.log(winsTotal);
    //console.log(losesTotal);

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

    var message = document.getElementById('message');
    var wins = document.getElementById('wins');
    var losses = document.getElementById('losses');

    //console.log(message);
    //console.log(wins);
    //console.log(losses);

// target all .box elements and attach a click event listener to each one using a loop

// within each click event...

    var box = document.getElementsByClassName('box');
    console.log(box);

// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

    for (i=0; i<box.length; i++) {
        box[i].addEventListener('click', function) {

        };

    }


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses