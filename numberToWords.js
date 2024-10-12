/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

    if (num === 0) return "Zero";

    const d = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
        100: "Hundred",
        1000: "Thousand",
        1000000: "Million",
        1000000000: "Billion"
    };

    const thousands = ["", "Thousand", "Million", "Billion"]

    function helper(num) {
        if (num === 0) return "";
        else if (num < 20) return d[num] + " ";
        else if (num < 100) return d[Math.floor(num / 10) * 10] + " " + helper(num % 10);
        else return d[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
    }

    let result = "";
    let i = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + (thousands[i] !== "" ? thousands[i] + " " : "") + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return result.trim();

};

let num = 2345;
console.log(num % 1000);
console.log(numberToWords(num));