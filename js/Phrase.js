/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/* Goal: To create a Phrase class to handle the creation of phases*/

class Phrase {

    // Initializes a phrase property set to the phrase and converting the phrase to lowercase.
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //The addPhraseToDisplay() method add letters to the placeholder in the game box. 
    //The loop goes through the each phrase and creates <li> tags holding each letter and space.
    //The letters are hidden using the "hide letter" class and the "space" class for spaces.
    //Each letter is then appended as a character to the "phrase ul" class.

    addPhraseToDisplay() {
        $('#phrase ul').empty();
        for (let i = 0; i < this.phrase.length; i++) {
            let char = this.phrase[i];
            if (char === " ") {
                let space = $(`<li class ="space"> </li>`);
                $('#phrase ul').append(space);
            } else {
                let hiddenLetter = $(`<li class = "hide letter ${char}" > ${char}</li>`);
                $('#phrase ul').append(hiddenLetter);
            }
        }
    }
    //The check letter method checks each guessed letter to see if it is in the phrase
    // The if statement checks if the guessed letter matches any letter in the phrase generated from the for loop.
    checkLetter(guess) {
        //console.log('I am in check letter');
        for (let i = 0; i < this.phrase.length; i++) {

            let currentPhrase = this.phrase[i];
            console.log(currentPhrase);
            if (guess === currentPhrase) {
                //console.log('letterfound');
                return true;
            }
        }
        return false;
    };

    // The show matched letter method reveals whether each letter on the board matches the player's guess.
    showMatchedLetter(guess) {
        let $matchLetter = $('#phrase ul .' + guess);
        $matchLetter.removeClass('hide');
        $matchLetter.addClass('show');
    }

};













