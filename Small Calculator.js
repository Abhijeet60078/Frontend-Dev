const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;
function calculate(op) {
    try {
        switch (op) {
            case "add": return num1 + num2;
            case "subtract": return num1 - num2;
            case "divide":
                if (num2 === 0) throw "Divide by zero";
                return num1 / num2;
            case "power": return num1 ** num2;
            case "root":
                if (num1 < 0) throw "Negative root";
                return Math.sqrt(num1);
            default: throw "InvalidOperationError";
        }
    } catch (e) {
        return "Error: " + e;
    }
}
for (let op of operations) {
    console.log(op, "=>", calculate(op));
}
