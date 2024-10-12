/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack = [];
    for (let char of s) {
        stack.push(char); // Añado mis caracteres a mi pila
        if (stack.length >= 2) { // Si tengo más de dos caracteres en la pila
            const last = stack[stack.length - 1]; // Guardo el último caracter añadido
            const secondLast = stack[stack.length - 2]; // Guardo el penúltimo caracter añadido
            if ((secondLast === 'A' && last === 'B') || (secondLast === 'C' && last === 'D')) { // Si hay secuencia, elimino caracteres
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length;
};

let s = "ABFCACDB";
console.log(minLength(s));