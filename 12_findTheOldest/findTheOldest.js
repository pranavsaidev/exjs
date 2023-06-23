const findTheOldest = function(arr) {
    return arr.reduce((acc, cur) => {
        console.log(acc);
        let ad = acc?.yearOfDeath ?? (new Date).getFullYear();
        let cd = cur?.yearOfDeath ?? (new Date).getFullYear();
        if((cd - cur.yearOfBirth) > (ad - acc.yearOfBirth))
        return cur;
        else
        return acc;
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
