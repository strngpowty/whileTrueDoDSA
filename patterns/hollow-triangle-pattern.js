/* 
     *
    * *
   *   *
  *     *
 *       *
***********

*/

let n = 6
let str = ""
for (let i=0; i<n; i++) {
    for (let j=0; j<n-i; j++) {
        str += " "
    }
    for (let j=0; j<=i; j++) {
        if ((i>1 && i<n-1)) {
            if(j==0 || j==i) {                
                str += "* "
            } else {
                str += "  "
            }
        } else {
            str += "* "
        }
    }
    console.log(str)
    str = ""
}