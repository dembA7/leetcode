/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {

    s = s.replace(/-/g, '').toUpperCase();

    let result = [];
    let n = s.length; // Longitud de la cadena

    let i = n % k; // Si divido la longitud de la cadena entre k, el residuo es la cantidad de caracteres que tendrá el primer grupo
    if (i > 0) { // Si mi residuo es mayor a 0
        result.push(s.slice(0, i)); // Agrego los primeros i caracteres (residuo) a mi resultado para el primer grupo
        s = s.slice(i); // Actualizo mi cadena s para que no contenga los primeros i caracteres
    }

    for (let j = 0; j < n - i; j += k) { // Recorro mi cadena s de k en k
        result.push(s.slice(j, j + k)) // Agrego los k caracteres a mi resultado
    }

    return result.join('-');

};

console.log(licenseKeyFormatting("5F3Z-2e-9-w1", 4));
