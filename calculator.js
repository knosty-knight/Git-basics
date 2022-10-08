let calc = (a,b,option)=>{
    switch (option) {
        case "+":
            return (a+b);
            
        case "-":
            return (a-b);
            
        case "*":
            return (a*b);
            
        case "/":
            return (a/b);
                            
        default:
            console.log("wrong Option!");
            break;
    }
}
let c = 0;
console.log(c = calc(216,2,"/"));