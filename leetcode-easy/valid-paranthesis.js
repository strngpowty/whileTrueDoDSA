let s = "({{[]}})"
let stack = []

for (let i=0; i<s.length; i++) {
    let paranthesis = s.charAt(i)
    switch(paranthesis) {
        case '(' :
            stack.push(")");
            break;
        case '{' :
            stack.push('}');
            break;
        case '[' :
            stack.push(']');
            break;
        default :
            if(stack.pop() !== paranthesis) console.log("Invalid Paranthesis") 
    }
}
console.log(stack.length)
stack.length == 0 ? console.log("Valid Paranthesis") : console.log("Invalid Paranthesis") 