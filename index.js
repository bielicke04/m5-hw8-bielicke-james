// Create an Array of at least 3 losing messages

    var loser = [
        "Nope. Not even close.",
        "Hello? Anybody home?",
        "Are you even trying?"
    ]

    //console.log(loser);


// Create variables to count wins and losses

    var winsTotal = 0
    var lossesTotal = 0

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

    var boxOpts = document.getElementsByClassName('.box');
    //console.log(boxOpts);

    //this is where I started to get lost and derailed
    for (i=0; i<boxOpts.length; i++) {
        boxOpts[i].addEventListener('click');
        box.onclick = clickIt;
    }

// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

    function clickIt(event) {
        var boxMain = parseInt(this.textContent); //this seemed ok
    

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

    var randomNum = Math.floor(Math.random() * 4); //this seemed ok
    //console.log(randomNum)


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

    if (randomNum === boxMain) { //this seemed ok
        displayedmessage.textContent = "It's your lucky day!"
        allWins += 1
        displayedwincount.textContent = "Wins: " + allWins
    }


// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

    else { //this seemed ok
        function loseMess(loser) {
            return loser[Math.floor(Math.random() * loser.length)]
        }
        lossesTotal.textContent = loser 
    }