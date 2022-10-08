let exchange = (a,b)=>{
    console.log(`the value of a is ${a} and value of b is ${b} before exchange `);
    a = a+b;
    b = a-b;
    a = a-b;
    console.log(`the value of a is ${a} and value of b is ${b} after exchange `);
}

exchange(4,6);