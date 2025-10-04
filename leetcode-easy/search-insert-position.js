nums = [1,3,5,6], target = 7

let i = 0, j = nums.length-1


while(j >= i) {
    let mid = Math.floor((j+i)/2)
    if(nums[mid] === target) {
        console.log(mid)
        break
    } else if(nums[mid] < target) {
        i++
    } else {
        j--
    }
}

console.log(i)
