/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 0; i < strs.length; i++){
        while (strs[i].indexOf(prefix) != 0){
            prefix = prefix.slice(0, prefix.length - 1)
            if (prefix.length === 0){
                return ""
            }
        }
    }
    return prefix
};

strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));

// indexOf retorna 0 si el valor de la izquierda coincide 
// con el valor de la derecha (de derecha a izquierda)
console.log(strs[0].indexOf("flight"));

// slice sirve para recortar un string o array, retorna el
// string o array copiado sin los caracteres recortados
console.log(strs.slice(0, 1))
console.log(strs[0].slice(0,4))