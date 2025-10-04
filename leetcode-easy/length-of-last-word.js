s = "   fly me   to   the moon  "
let last_word = ""

for(let i=s.length-1; i>=0; i--) {
    if(s[i] === " " ) {
        if(last_word.length) {
            break
        }        
    } else {
        last_word += s[i]
    }
}

console.log(last_word.length)