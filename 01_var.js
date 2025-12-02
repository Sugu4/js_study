let zahl = 1;
zahl = 3.14;
zahl = "Hallo";

let bool = true;
let undef = undefined;
let n = null;

let person = {
    name: "Peter",
    age: 27
};

let x = "age";


const pi = 3.14;


let arr = [1, 3, "Hallo", "geh kacken"];

let map = new Map();
map.set("dog", "Hund");
map.set(2, "cat");

let [a, b] = arr;

let arr2 = [[1, 2, 3],[4, 5,[6, 7]]];

let set = new Set([1, 2, 2, 3, 4, 4, 5, 6]);
set.add(1);
set.add(7);

console.log(Boolean(zahl));
console.log(Boolean(-1));
console.log(Number(true));
console.log(Number("123.34"));
console.log(String(123));
console.log(pi.toString());
console.log(arr.at(-1));
console.log(zahl[0]);
console.log("a" > "A");
console.log(map.values());
console.log(b);
console.log(arr2[1][2][1]);
console.log(set.has(7));
