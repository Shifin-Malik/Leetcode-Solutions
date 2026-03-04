function intersection(nums1: number[], nums2: number[]): number[] {
    let arr : number[] = [];
    let i : number;
    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i]) && !arr.includes(nums1[i])){
            arr.push(nums1[i])
        };
    };
    return arr
};