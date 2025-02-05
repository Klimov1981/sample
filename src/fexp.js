const operations = {
 add: (a, b) => a + b,
 subtract: (a, b) => a - b,
 multiply: (a, b) => a * b,
 divide: (a, b) => {
   if (b === 0) console.log("Деление на ноль запрещено");
   return a / b;
 },
}

function calculate(a, b, operation) {
 return operation(a, b)
}

const selectedOperation = "divide";
console.log(calculate(6, 7, operations[selectedOperation]));
console.log(calculate(6, 0, operations[selectedOperation]));