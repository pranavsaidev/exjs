const fibonacci = function(i) {
    if(i <= 0) return "OOPS";
    let a,b,c;
    a = b = c = 1;
    if( i == 1 || i == 2)
    return c;
    i -= 2;
    while(i--) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
