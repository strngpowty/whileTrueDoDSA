/* 

*          *
**        **
***      ***
****    ****
*****  *****
************
************
*****  *****
****    ****
***      ***
**        **
*          *

*/

let n = 6
let str = ""

for ( let i=0; i<n; i++ ) {
    for(let j=0; j<=i; j++) {
        str += "*"
    }
    for(let j=i; j<n-1; j++) {
        str +=" "
    }
    for(let j=n-1; j>i; j--) {
        str +=" "
    }
    for(let j=0; j<=i; j++) {
        str += "*"
    }
    console.log(str)
    str = ""    
}

for(let i=0; i<n; i++) {
    for(let j=n; j>i; j--) {
        str +="*"
    }
    for(let j=0; j<i; j++) {
        str += " "
    }
    for(let j=0; j<i; j++) {
        str += " "
    }
    for(let j=n; j>i; j--) {
        str += "*"
    }
    console.log(str)
    str = ""
}