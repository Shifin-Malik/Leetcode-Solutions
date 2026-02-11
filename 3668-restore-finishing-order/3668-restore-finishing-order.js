/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let res = [];
    for(let ord of order){
        if(friends.includes(ord)){
            res.push(ord);
        };
    };
    return res
};
