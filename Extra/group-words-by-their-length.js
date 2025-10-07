let words = ["cat", "dog", "mouse", "rat"]

// Output: {
//   3: ["cat", "dog", "rat"],
//   5: ["mouse"]
// }

let obj = {}

for(let word of words) {
    let len = word.length

    if(!obj[len]) {
        obj[len] = []
    }

    obj[len].push(word)
}

console.log(obj)