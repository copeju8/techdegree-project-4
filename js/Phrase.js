/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/* Goal: To create a Phrase class to handle the creation of phases

- Create the Phrase class in the Phrase.js file.
*/



class Phrase {  //CREATING PHRASE CLASS (Entire Javascript file is this one class)

    // Initializes a phrase property set to the phrase
    //Takes the phrase being held and converts to lowercase
    constructor(phrases) {
        this.phrases = phrases.toLowerCase();
    }

    addPhraseToDisplay() {
        this.$phrases.empty();
        for (let i = 0; i < this.phrases.length; i++) {
            let letter = this.phrases[i];
            let hiddenLetter = $(`<li class = "hide letter" ${letter} " > ${letter}</li>`);
            this.$phrases.append(hiddenletter);
        }
    }
}


// //     // }
// //     //     addPhraseToDisplay() // METHOD WHICH ADDS LETTER PLACEHOLDERS (BOXES) TO THE GAMEBOARD AT THE START

// //     //     // Go through the phrase and create <li> tags holding each letter and space. (I used a for loop)
// //     //     // Use the "hide letter" class for letters and the "space" class for spaces
// //     //     // Append each character to the #phrase ul (See below for how it will look as per example_phrase_html)

// //     //     /******************************************************************
// //     //         <div id="phrase" class="section">
// //     //             <ul>
// //     //                 <li class="hide letter h">h</li>
// //     //                 <li class="hide letter o">o</li>
// //     //                 <li class="hide letter w">w</li>
// //     //                 <li class="space"> </li>
// //     //                 <li class="hide letter a">a</li>
// //     //                 <li class="hide letter r">r</li>
// //     //                 <li class="hide letter e">e</li>
// //     //                 <li class="space"> </li>
// //     //                 <li class="hide letter y">y</li>
// //     //                 <li class="hide letter o">o</li>
// //     //                 <li class="hide letter u">u</li>
// //     //             </ul>
// //     //         </div>
// //     //     *******************************************************************/







// checkLetter() //METHOD THAT CHECKS EACH GUESSED LETTER TO SEE IF IT IS IN THE PHRASE

            // // Go through the phrase and test if the guessed letter matches any letter in the phrase. (I used a for loop again)


            // showMatchedLetter() // METHOD THAT REVEALS EACH LETTER ON THE BOARD THAT MATCHES THE PLAYER'S GUESS
            // // Remove the class of "hide" and add the class of "show"

