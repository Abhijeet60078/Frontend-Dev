class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}
const employees = [
    new Employee(1, "A", "IT", 30000),
    new Employee(2, "B", "HR", 25000),
    new Employee(3, "C", "Sales", 40000),
    new Employee(4, "D", "IT", 35000),
    new Employee(5, "E", "Marketing", 28000)
];
let total = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(total);
