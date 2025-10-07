let str = "Hello World welcome to the AI World";
let obj = {}

for (let s of str) {
    if((s>= 'a' && s<= 'z') || (s >= 'A' && s <='Z' )) {
        obj[s] = (obj[s] || 0) + 1
    }
}

console.log(obj)