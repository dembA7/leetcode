/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix;
};

let array = ["flower","flow","flight"];

// indexOf compara dos cadenas y retorna 0 si los caracteres de la primera cadena 
// coinciden con los de la segunda (de izquierda a derecha), para todos los demás valores retorna -1
console.log(array[0].indexOf("flower"));

// Substring elimina los caracteres de un string dado el rango
console.log(array[0].substring(0, array[0].length -1));