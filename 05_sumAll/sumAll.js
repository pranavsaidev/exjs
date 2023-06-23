const sumAll = function(a,b) {
    if((a<0 || b<0) || (typeof a != 'number') || (typeof b != 'number'))
    return 'ERROR';
    let ans=0;
    if(a>b){
        const temp=a;
        a=b;
        b=temp;
    }
    for(let i=a;i<=b;i++)
    ans+=i;
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
