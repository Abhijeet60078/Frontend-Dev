const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
    try {
        if (t === null) throw "Null entry";
        if (!t.id || t.amount === undefined) throw "Missing field";
        if (t.amount < 0) throw "Negative amount";

        valid.push(t);
    } catch (e) {
        invalid.push({ entry: t, error: e });
    }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
console.log("Success:", valid.length);
console.log("Failed:", invalid.length);
