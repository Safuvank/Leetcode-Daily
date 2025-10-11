/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    const root = Math.floor(Math.sqrt(n));
    if(root * root !== n) {
        return false
    }
    for (let i= 2; i*i<=root; i++){
        if(root % i === 0){
            return false;
        }
    }return root >1
};