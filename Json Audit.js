const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let clean = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let obj = JSON.parse(rawData[i]);
        if (!obj.user || !obj.age) throw "Missing fields";

        obj.age = Number(obj.age);
        if (obj.age >= 18) clean.push(obj);

    } catch (e) {
        console.log("Line", i + 1, "Error:", e);
    }
}

console.log(clean);
