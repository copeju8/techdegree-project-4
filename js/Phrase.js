/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/* Goal: To create a Phrase class to handle the creation of phases

- Create the Phrase class in the Phrase.js file.
*/

let phrases = [
    {
        quote: 'Today is your day',
    },
    {
        quote: 'Are we there yet',
    },
    {
        quote: 'What is in your wallet',
    },
    {
        quote: 'Can you hear me now'
    },
    {
        quote: 'A diamond is forever',
    }
];

class Phrase {

    constructor(phrase) {
        phrases = getRandomPhrase();
        this.phrase = phrase;
    }
    /* createPhrase() {
        $()
        let randomPhrase = Math.floor(phrases*length);
       //phrase.characters = myString.string.length; 
    
       return String(this.phrase);
      }*/

    addPhraseToDisplay() {
        console.log(this.phrase);
        //adds letter placeholder to display when the game starts
        //Each letter is presented by an empty box (e.g. example_phrase_html.txt)
    }

    checkLetter() {
        // checks to see if the letter selected by the player matches a letter in the phrase
        //filter() method
    }

    showMatchedLetter() {
        // reveals correct matched letters on the board
        // select all of the letter DOM elements that have a CSS class name......
    }
}
