/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Goal: To create a Game class with methods for starting and ending the game, handling interactions,
getting a random phrase, checking for win, and removing a life from the scoreboard.

Create the Game class in the Game.js file.
*/

/*Game.js
*/

//class Game { // CREATING GAME GLASS. (Entire Javascript file is this one class)

class Game {
    constructor() {
        this.missed = 0;       // Track the number of missed guesses, initially set to 0
        // Store array of phrases
        this.phrases = [
            new Phrase('So Easy a Caveman Can Do It'),
            new Phrase('Are we there yet'),
            new Phrase('What is in your wallet'),
            new Phrase('What is in your wallet'),
            new Phrase('Can you hear me now'),
            new Phrase('A diamond is forever')
        ];
        this.activePhrase = 'null';  //Initially there is no phrase chosen
    }

    // Previous lives reset
    // Previous keyboard reset
    // Random phrase is retrieved (getRandomPhrase())

    startGame() {
        $('#overlay').hide(2000);
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    getRandomPhrase() {

        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    // METHOD THAT CHECKS IF USER HAS WON
    // Check if there are no more hidden letters in the phrase object, return true or false
    checkForWin() {
        return ('#phrase ul .hide').length === 0;
    }

    removeLife() {
        // METHOD THAT REMOVES LIFE FROM SCOREBOARD WHEN CALLED
        let $lives = $('#scoreboard li');
        let $lifeToRemove = $lives.eq(this.missed);
        let $imageToReplace = $lifeToRemove.children().first();
        $imageToReplace.attr('src', 'images/lostHeart.png');
        $imageToReplace.delay(1000).hide();
        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    gameOver() {
        // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
        //($("#scoreboard li img").attr('images/lostHeart.png', '/images/liveHeart.png'));
        //&("#scoreboard li img").show();

        let $gameOverMessage = $("#game-over-message").show("slow");
        let $restartGame = $("#overlay").show("slow");
        $restartGame.delay(1000).show();

    }
    // Leaves game screen and goes back to overlay
}

//     // If user has max misses, they lose and...
//     //Display losing message
//     // Gives overlay losing class name and styles
//     // Otherwise/else...
//     // Display winning message
//     // Gives overlay winning class name and styles (Star Wars Victory pic)

