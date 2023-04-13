/**
 * @param {string} s
 * @return {boolean}
 */
 
var isValid = function(s) {

    stack =[];
    d = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (d[char]){
            stack.push(char);
        } else{
            const lastChar = stack.pop();
            if (d[lastChar] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
};

s = "()[]{"
console.log(isValid(s));