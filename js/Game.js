/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Goal: To create a Game class with methods for starting and ending the game, handling interactions,
getting a random phrase, checking for win, and removing a life from the scoreboard.
*/
/*A constructor is a special method allowing the creation of multiple similar objects with the same properties.
Reference to these objects allows us access to instances of these properties are used throughout the methods 
in the game class.  */
class Game {
    constructor() {
        this.missed = 0;       // Track the number of missed guesses, initially set to 0
        this.phrases = [       // Store array of phrases
            new Phrase('So Easy a Caveman Can Do It'),
            new Phrase('Are we there yet'),
            new Phrase('What is in your wallet'),
            new Phrase('Can you hear me now'),
            new Phrase('A diamond is forever')
        ];
        this.activePhrase = 'null';  //Initially, there is no phrase chosen
    }

    // Previous lives reset
    // Previous keyboard reset
    // 
    /* The start game method hides the initial overlay in the main container, and adds and the hidden phrase in the boxes.
    The random phrase is retrieved by calling (getRandomPhrase())
    The hearts and scoreboard images are loaded onto the web page.*/
    startGame() {
        $('#overlay').hide(2000);                   //hide screen overlay
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        const $reappearHearts = $("#scoreboard li img");
        $reappearHearts.attr("src", "images/liveHeart.png");
        $reappearHearts.show();
        $("#qwerty .key").prop("disabled", false);
        $("#qwerty .key").removeClass('chosen');
        $("#qwerty .key").removeClass('wrong');
    };

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /* The remove life method is removes lives from the scoreboard when called removing and hiding the live heart*/
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

    // The check for win method checks if there are no more hidden letters in the phrase object, return true or false*/
    checkForWin() {
        let result = false;
        if (parseInt($('#phrase ul .hide').length) === 0) {
            //console.log('check for win- game is won');
            result = true;
        }
        return result;
    }

    /*The gameOver method ends the game and displays a message on whether the player wins or loses.*/
    gameOver(gamewon) {
        const $restartGame = $("#overlay").show("slow");
        $("#qwerty .key").prop("disabled", true);
        $("#overlay").show("slow");
        if (gamewon) {
            console.log('respond to game won');
            $("#game-over-message").text("Congratulations! You know your slogans!");
            $("#overlay").css('background-image', 'url("images/winnerpic.jpg")');
        }
        else {
            console.log('respond to game lost');
            $("#game-over-message").text("Sorry! You ran out of guesses. Try again!");
            $("#overlay").css('background-image', 'url("images/lostpic.png")');
        }
    }
    /* The handleInteraction method manages the interaction among the events (background processing) 
    that disable the already pressed and chosen keys/keyups or characters chosen versus the incorrect chosen characters
    wrong*/
    handleInteraction(e) {
        let $guess = $(e.target).text();
        $(e.target).prop("disabled", true);
        if (this.activePhrase.checkLetter($guess)) {
            this.activePhrase.showMatchedLetter($guess);
            $(e.target).addClass('chosen');
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            this.removeLife();
            $(e.target).addClass("wrong");
        }
    };
}
