let haystack = "sadbutsad", needle = "sad"

for (let i=0; i< haystack.length; i++) {
    let ismacthed = true
    for (let j=0; j<needle.length; j++) {
        if(haystack[i+j] !== needle[j]) {
            ismacthed = false
            break
        }
    }
    if(ismacthed) {
        console.log(i)
        return
    }
}

    console.log("-1")