const leapYears = function(y) {
    if(y%4){
        return false;
    }
    else{
        if(y%100)
        return true;
        else{
            if(y%400)
            return false;
            else
            return true;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
