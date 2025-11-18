let nums = [];
for (let i = 1; i <= 30; i++) nums.push(i);

let output = [];

nums.forEach(n => {
    if (n % 3 === 0 && n % 5 === 0) output.push("FizzBuzz");
    else if (n % 2 === 0) output.push("Even");
    else output.push("Odd");
});

console.log(output);
