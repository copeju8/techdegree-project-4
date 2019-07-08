/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Goal: To create a Game class with methods for starting and ending the game, handling interactions,
getting a random phrase, checking for win, and removing a life from the scoreboard.

Create the Game class in the Game.js file.
*/

/*Game.js
*/
class Game {

    constructor() {
        this.missed = 0;
        this.phrase = phrase;


    }
    startGame() {
        //hides the start screen overlay;
        //call getRandomPhrase()
        //set activePhrase property = getRandomPhrase()
    }

    getRandomPhrase() {
        // Getter method
        //randomly retrieves one of the phrases stored in the array
    }

    handleInteraction() {
        // controls most of the game logic
        // Checks if the button clicked matches a letter in the phrase (correct or incorrect) 
        // checkForWin() and gameOver()
    }

    removeLife() {
        // removes lives from the scoreboard
        // replaces one of the liveHeart.png images with a lostHeart.png images
        // increases the missed property
        // five missed guesses - end of the game
    }

    checkForWin() {
        // checks if player reveals all matches

        gameOver() {
            // displays the original start screen overlay
        }
    }
