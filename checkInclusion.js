/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function countLetters(str) {
    let letterCount = {};
    for (let char of str) {
        if (letterCount[char]) {
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }
    return letterCount;
}

var checkInclusion = function(s1, s2) {
    const s1Count = countLetters(s1);
    const s1Length = s1.length;

    // Creo mi ventana para la primera parte de s2
    let s2Window = s2.slice(0, s1Length);
    let s2Count = countLetters(s2Window);

    // Creo mi función para comparación de objetos s1 y s2
    function isEqual(count1, count2) {
        const keys1 = Object.keys(count1);
        const keys2 = Object.keys(count2);

        if (keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (count1[key] !== count2[key]) return false;
        }

        return true;
    }

    if (isEqual(s1Count, s2Count)) return true;

    // Deslizar la ventana por el resto de s2
    for (let i = s1Length; i < s2.length; i++) {
        const newChar = s2[i]; // Carácter nuevo que entra en la ventana
        const oldChar = s2[i - s1Length]; // Carácter que sale de la ventana

        // Actualizar conteo de la ventana
        s2Count[newChar] = (s2Count[newChar] || 0) + 1; // Añadir nuevo carácter
        s2Count[oldChar]--;

        // Si el conteo del carácter viejo llega a 0, lo eliminamos
        if (s2Count[oldChar] === 0) {
            delete s2Count[oldChar];
        }

        // Comparar los conteos nuevamente
        if (isEqual(s1Count, s2Count)) {
            return true;
        }
    }

    return false;
};

let s1 = "ab";
let s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));