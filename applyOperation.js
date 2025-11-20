function applyOperation(numbers,operation){
    const result=[];
    for(let i=0;i<numbers.length;i++){
        result.push(operation(numbers[i]));
    }
    return result;

}
const doubled=applyOperation([1,2,3,4],num=>num*2);
const squared=applyOperation([1,2,3,4],num=>num*num);
console.log(double);
console.log(squared);