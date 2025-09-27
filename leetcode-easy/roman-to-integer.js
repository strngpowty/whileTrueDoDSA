let s = "MCMXCIV"

/* Input: s = "MCMXCIV"
Output: 1994
*/

let map = { "I": 1, "V": 5, "X": 10, "C": 100, "M": 1000}
let result = 0;

for(let i=0; i<s.length-1; i++) {
    result += map[s[i]] < map[s[i+1]] ? - map[s[i]] : map[s[i]]
}

console.log(result + map[s[s.length-1]])