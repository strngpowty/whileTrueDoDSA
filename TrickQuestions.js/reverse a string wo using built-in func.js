let s1 = "hello"

let s = s1.split("")

let j = s.length-1
let i = 0

while(i < j) {
    let char = s[i]
    s[i] = s[j]
    s[j] = char
    i++
    j--
}

console.log(s.join(""))