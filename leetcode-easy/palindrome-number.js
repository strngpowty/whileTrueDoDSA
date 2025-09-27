let x = -121

let dupe = x
let rev_x = 0

while (dupe > 0) {

    rev_x = rev_x *10 + dupe%10
    dupe = Math.floor(dupe/10)
}

console.log(rev_x === x ? true : false)