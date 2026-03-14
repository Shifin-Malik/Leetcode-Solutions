
var numberOfSteps = function(num) {
    let stp = 0;
    while(num > 0){
        if(num % 2 === 0){
            num = num / 2
        } else {
            num = num - 1
        };
        stp++
    }
    return stp
    
};