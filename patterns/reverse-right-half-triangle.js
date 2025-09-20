/*

******
*****
****
***
**
*

*/

let n = 6

for( let i=n; i>0; i-- ) {
    for ( let j=i; j>0; j-- ) {
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}