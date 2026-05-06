/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

// let g = [3,3,3,3,3,1,3]

var groupThePeople = function(g) {
    let res = [];
    let buk = {};
    
    for(let i = 0; i < g.length; i++){
        let size = g[i]
        
        if(!buk[size]){
            buk[size] = [];
        }
        
        buk[size].push(i)
        
        if(buk[size].length === size){
            res.push(buk[size]);
            buk[size] = []
        }
    }
    return res
};

