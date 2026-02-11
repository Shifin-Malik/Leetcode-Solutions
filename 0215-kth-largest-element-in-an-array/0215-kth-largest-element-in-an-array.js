var findKthLargest = function(nums, k) {
    let sort = nums.sort((a, b) => b - a)[k - 1];
    return sort;
};
