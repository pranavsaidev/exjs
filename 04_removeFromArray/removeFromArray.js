const removeFromArray = function(arr, ...args) {
    let initi = [];
    const ans = arr.reduce((acc, curr) => {
        if(!args.includes(curr))
        acc.push(curr);
        return acc;
    },initi);
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
