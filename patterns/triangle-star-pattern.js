/* 

     * 
    * * 
   * * * 
  * * * * 
 * * * * * 
* * * * * *

*/

let n = 6
let res = "";

for (let i=0; i<n; i++) {
     for( let j=0; j<n-i; j++) {
          res += " "
     }
     for (let j=0; j<=i; j++) {
          res += "* "
     }
     console.log(res)
     res = ""
}