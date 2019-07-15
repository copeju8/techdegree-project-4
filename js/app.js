/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/* Goal: To create an new instance of the Game class and add event listeners to the start button
and onscreen keyboard buttons.*/

// In order for the game to start, we need to listen for the "start game" button to be clicked

let game;

$('#btn__reset').on('click', function (event) {
    game = new Game();
    game.startGame();
});

/* Once the event start game has been initiated, and the game board is set up to start the game,
we need to Listen for the interactive keyboard to be clicked. This key board action/event is part of the 
qwerty .key class/sibling elements in the html.*/

$('#qwerty .key').on('click', function (event) {
    game.handleInteraction(event);
});

// Exceed Expectation: 
// We are also Listening for physical keyboard to be pressed in addition to listening to the onscreen clicking events.
document.addEventListener('keydown', function (event) {
    const keyPressed = event.key.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const allKeys = document.getElementsByClassName('key');
    if (alphabet.includes(keyPressed)) {
        for (let key of allKeys) {
            if (key.innerText == keyPressed) {
                key.click();
            }
        }
    }
});







