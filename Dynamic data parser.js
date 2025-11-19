const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",null, undefined];
let validNumber=[];
let invalidNumber=[];
for(let item of apiData){
    let num=Number(item);
    let bool=Boolean(item);
    let str=String(item);
    if (!isNaN(num) && item !== " " && item !== "100px") {
        validNumber.push(num);
    } else {
        invalidNumber.push(item);
    }
    console.log("Number:", num, "Boolean:", bool, "String:", str);
}
console.log(validNumber);
console.log(invalidNumber);



