let nums = [2,7,11,15], target = 9 

let complement = 0;

for(let i=0; i<nums.length; i++) {
    complement = target - nums[i]
    for(let j=i+1; j<nums.length; j++) {
        if(nums[j] === complement) {
            console.log([i, j])
            return
        }
    }
}