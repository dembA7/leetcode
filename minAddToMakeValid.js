/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let open = 0;
  let close = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        close++;
      }
    }
  }

  return open + close;
};

let s = "())";
console.log(minAddToMakeValid(s));