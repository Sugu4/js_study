let zahl = 25;

if (zahl > 20) {
    let car = "toyoda";
    const plane = "A340";
    var potato = "pommes";

    console.log("true");
    
}
else {
    console.log("else");
}

console.log(car);
console.log(plane);
console.log(potato);

let arr = [{name: "geilerpeter", age: 27}, {name: "lamepeter", age: 20}, {name: "okpeter", age: 31}];

for (let i = 0; i < 10; i++) {
    console.log(arr[i]);
}


for (let i in arr) {
    console.log(i);
}

for (let person of arr2) {
    console.log(person);
}


let switchVar = "km"

switch (switchVar) {
    case "centimeter":
        console.log("centimeter");
        break;
    case "meter":
        console.log("meter");
        break;
    default:
        console.log("default");
}