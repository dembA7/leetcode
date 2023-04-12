
// @param {number[]} candidates
// @param {number} target
// @return {number[][]}

const candidates = [2,3,5];
const target = 8;

var combinationSum = function(candidates, target) {
    let result = [];
    let path = [];

    const backtrack = (remain, start) => {
        if (remain === 0){
            result.push([...path]);
            return;
        }
        if (remain < 0){
            return;
        }
        for (let i = start; i < candidates.length; i++){
            path.push(candidates[i]);
            backtrack(remain - candidates[i], i);
            path.pop();
        }
    }

    backtrack(target, 0);
    return result;
};

let j = combinationSum(candidates, target);
console.log(j);