/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/* Goal: To create a Phrase class to handle the creation of phases

- Create the Phrase class in the Phrase.js file.
*/
class Phrase {  //CREATING PHRASE CLASS (Entire Javascript file is this one class)

    // Initializes a phrase property set to the phrase
    //Takes the phrase being held and converts to lowercase - use phrase singular
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    //addPhraseToDisplay() // METHOD WHICH ADDS LETTER PLACEHOLDERS (BOXES) TO THE GAMEBOARD AT THE START

    addPhraseToDisplay() {
        // this.phrase.empty();
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
    //METHOD THAT CHECKS EACH GUESSED LETTER TO SEE IF IT IS IN THE PHRASE
    checkLetter(guess) {
        for (let i = 0; i < this.phrase.length; i++) {
            let currentPhrase = this.phrase[i];
            if (guess === currentPhrase) {
                return true;
            }
        }
        return false;
    };
    // METHOD THAT REVEALS EACH LETTER ON THE BOARD THAT MATCHES THE PLAYER'S GUESS

    showMatchedLetter(guess) {
        let $matchLetter = $('#phrase ul .' + guess);
        $matchLetter.removeClass('hide');
        $matchLetter.addClass('show');
    }

};



    //for (let i = 0; i < this.phrase.length; i++) {
    //let currentPhrase = this.phrase[i];
    // if (guess.value.match(this.phrase)) {









// //     // }
// //     //     
// //     //     // Go through the phrase and create <li> tags holding each letter and space. (I used a for loop)
// //     //     // Use the "hide letter" class for letters and the "space" class for spaces
// //     //     // Append each character to the #phrase ul (See below for how it will look as per example_phrase_html)


// checkLetter() 

// // Go through the phrase and test if the guessed letter matches any letter in the phrase. (I used a for loop again)




            // // Remove the class of "hide" and add the class of "show"

