let words = ["apple", "banana", "apricot", "blueberry", "cherry"];
let map = {}

for (let word of words) {
    let char = word[0]

    if(!map[char]) {
        map[char] = []
    }

    map[char].push(word)
}

console.log(map)