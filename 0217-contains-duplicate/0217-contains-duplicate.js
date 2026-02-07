var containsDuplicate = function(nums) {
    let sort = nums.sort((a, b) => a - b);
    let out = []
    for(let i = 0; i < sort.length;i++){
        if(sort[i] === sort[i + 1]){
            return true
        }
    }
    return false
};