// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

let nums = [0,0,1,1,1,2,2,3,3,4]

let i = 0 , j = 1


while (j<nums.length) {
    if (!(nums[i] === nums[j])) {
        nums[++i] = nums[j]
    }
    j++
}

console.log(i+ ", " + nums)
