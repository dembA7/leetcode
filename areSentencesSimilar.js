/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {

    words1 = sentence1.split(" ");
    words2 = sentence2.split(" ");

    let longest;
    let shortest;

    if (words1.length > words2.length) {
        longest = words1;
        shortest = words2;
    } else {
        longest = words2;
        shortest = words1;
    }

    let leftShortest = 0;
    let rightShortest = shortest.length - 1;

    let leftLongest = 0;
    let rightLongest = longest.length - 1;

    while (longest[leftLongest] === shortest[leftShortest] && leftLongest < longest.length && leftShortest < longest.length) {
        leftLongest++;
        leftShortest++;
    }

    while (longest[rightLongest] === shortest[rightShortest] && rightLongest >= 0 && rightShortest >= 0) {
        rightLongest--;
        rightShortest--;
    }

    if (leftShortest > rightShortest) {
        return true 
    } else { 
        return false; 
    }

};

// let sentence1 = "My name is Haley";
// let sentence2 = "My Haley";

// let sentence1 = "of";
// let sentence2 = "A lot of words";

// let sentence1 = "Eating right now"
// let sentence2 = "Eating"

let sentence1 = "Ogn WtWj HneS"
let sentence2 = "Ogn WtWj HneS"

console.log(areSentencesSimilar(sentence1, sentence2));