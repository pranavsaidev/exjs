const palindromes = function (str) {
    let revStr = str.toLowerCase();
    let newStr = revStr;
    revStr = revStr.split('').filter(c => c >= 'a' && c <= 'z').reverse().join('');
    newStr = newStr.split('').filter(c => c >= 'a' && c <= 'z').join('');
    return revStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
