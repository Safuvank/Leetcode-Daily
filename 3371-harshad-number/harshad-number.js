/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sum = x.toString().split("").reduce((acc,cur)=>acc+Number(cur),0)
    
    

    if( x % sum === 0){
        return sum
    }else{
        return -1
    }
};