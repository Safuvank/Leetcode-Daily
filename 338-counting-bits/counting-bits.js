/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

    const result = []

    for(let i = 0; i <= n; i++){

        let binary = i.toString(2)

        let count = 0

        for(let bit of binary){
            if(bit === '1') count++
        }

        result.push(count)
    }

    return result
};