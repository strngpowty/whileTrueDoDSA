let arr =  [1, 2, 3, 4, 5, 6]
// Output: {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }

let obj = {}

for (let a of arr) {
    let index = a % 2 == 0 ? 'even' : 'odd'

    if(!obj[index]) {
        obj[index] = []
    }

    obj[index].push(a)
}

console.log(obj)