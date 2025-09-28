strs = ["flower","flower","flower","flower"]
let common_str = ""
let res_str = ""
let length = Math.min(strs[1].length, strs[0].length)
for(let i=0; i<length; i++) {
    if(strs[0][i] === strs[1][i]) {
        common_str += strs[0][i]
    } else {
        break
    }
}
for(let i=2; i<strs.length; i++) {
    for(let j=0; j< Math.min(common_str.length, strs[i].length); j++) {  
        if(common_str.charAt(j) == strs[i][j]) {
            res_str += strs[i][j]
        }        
    }
    common_str = ""
    common_str += res_str
    res_str = ""
}
console.log(common_str)