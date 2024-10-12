/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let words = s.split(' ');
    
    if (words.length !== pattern.length) return false;

    let charsMap = {}; // Letras a palabras
    let wordsMap = {}; // Palabras a letras

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        // Si la letra actual del patron no está en mi mapa de caracteres
        if (!(char in charsMap)) {
            charsMap[char] = word; // La agrego al mapa
        } else if (charsMap[char] !== word) {
            return false;
        }

        // Si la palabra actual no está en mi mapa de letras
        if (!(word in wordsMap)) {
            wordsMap[word] = char; // La agrego al mapa
        } else if (wordsMap[word] !== char) {
            return false;
        }
    }

    return true;

};

let pattern = 'abba';
let s = 'dog constructor constructor dog';

console.log(wordPattern(pattern, s));