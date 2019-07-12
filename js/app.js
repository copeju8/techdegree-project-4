/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/* Goal: To create an new instance of the Game class and add event listeners to the start button
and onscreen keyboard buttons.*/


// Listening for "start game" button to be clicked

let game;

$('#btn__reset').on('click', function (event) {
    game = new Game();
    game.startGame();
});


// Listening for interactive keyboard to be clicked

$('#qwerty .key').on('click', function (event) {
    game.handleInteraction(event);              // The game class overs events for the whole keyboard.

});




    // }
    // const btn1 = document.getElementById("button1")




// }


// Listening for physical keyboard to be pressed (For Exceeds only)
