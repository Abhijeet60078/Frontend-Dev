let bonus=5000;
function calculateSalary(isPermanent){
    const salary=40000;
    if(isPermanent){
        const totalSalary=salary+bonus;
        console.log(totalSalary);
    }
    else{
        const totalSalary=salary;
        console.log(totalSalary);

    }
}
console.log(bonus);
calculateSalary(true);
calculateSalary(false);