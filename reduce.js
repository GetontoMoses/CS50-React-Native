const x = [0,1,2,3]

function addNumbers(x,y){return x+y}

console.log(addNumbers(10,20));
console.log(x.reduce(addNumbers)); // it iterates throught each items as two items