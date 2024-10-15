/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let swaps = 0
    let li = 0
    let ri = s.length - 1
    while (li < ri) {
        if(s[li]=='1'){
            if(s[ri]=='0'){
                swaps+=ri-li
                li++
            }
            ri--
        }
        else{
            if(s[ri]=='1')ri--
            li++
        }
    }
    return swaps
};