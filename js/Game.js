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

    removeLife() {
        // METHOD THAT REMOVES LIFE FROM SCOREBOARD WHEN CALLED
        this.missed++;              //tally of misses
        const lostHeart = "images/lostHeart.png";   //variable holding image

        const $lives = $("#scoreboard li");           //identify the image element
        let $removeLife = $lives.eq(this.missed);   //variable to hold the missed lives
        let $replaceIMG = $removeLife.children().first();
        //variable to hold the removed lives
        $replaceIMG.attr("src", lostHeart);         //actually get the lost image
        $replaceIMG.attr("alt", "Lost Icon");       //replace image with lost icon
        $replaceIMG.removeClass("tries");           ///remove the tries
        $replaceIMG.addClass("lost");
        //$replaceIMG.delay(1000).hide();
        console.log('missed:' + this.missed);
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    checkForWin() {
        console.log('check for win called');
        console.log(parseInt($('#phrase ul .hide').length));
        var result = false;
        if (parseInt($('#phrase ul .hide').length) === 0) {
            console.log('check for win- game is won');
            result = true;
        }
        return result;
        // else {
        //     console.log('check for win- game is lost');
        //     return false;
        // }
        //return ($('#phrase ul .hide').length === 0);
    }

    gameOver(gamewon) {
        // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
        //($("#scoreboard li img").attr('images/lostHeart.png', '/images/liveHeart.png'));
        //&("#scoreboard li img").show();
        const $restartGame = $("#overlay").show("slow");
        if (gamewon) {
            console.log('respond to game won');
            $("#game-over-message").text("Congratulations! You know your slogans!");
            $restartGame.removeClass("start");
            $restartGame.addClass("win");
        }
        else {
            console.log('respond to game lost');
            $("#game-over-message").text("Sorry! You ran out of guesses. Try again!");
            $restartGame.removeClass("start");
            $restartGame.addClass("lose");
        }
        // if (this.checkForWin()) {
        //     $("#game-over-message").text("Congratulations! You know your slogans!");
        //     $restartGame.removeClass("start");
        //     $restartGame.addClass("win");
        // } else {
        //     $("#game-over-message").text("Sorry! You ran out of guesses. Try again!");
        //     $restartGame.removeClass("start");
        //     $restartGame.addClass("lose");
        // }
    }
    // Leaves game screen and goes back to overlay


    handleInteraction(e) {
        let $guess = $(e.target).text();
        console.log($guess);
        $(e.target).prop("disabled", true);
        if (this.activePhrase.checkLetter($guess)) {
            console.log('letter is checked');
            this.activePhrase.showMatchedLetter($guess);
            $(e.target).addClass('chosen');
            console.log('value of check of win' + this.checkForWin());

            if (this.checkForWin()) {

                this.gameOver(true);
                console.log('hello');
            }

        } else {
            // this.gameOver(false);
            console.log('remove life called');
            this.removeLife();
            $(e.target).addClass("wrong");
        }

    };


    // if ( {
    //     this.activePhrase.showMatchedLetter($Letter);
    //     $(e.target).addClass('chosen');

    // } else {
    //     // If user has max misses, they lose and...
    //     //Display losing message
    //     // Gives overlay losing class name and styles
    //     // Otherwise/else...
    //     // Display winning message
    //     // Gives overlay winning class name and styles (Star Wars Victory pic)

}
