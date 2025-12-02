function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();

function add(zahl, zahl2, ...args) {
    if(typeof zahl == "number") {
    console.log(args.length);
    if (args.length !== 0){
        return "to many arguments";
    }
     return zahl + zahl2;
    } else {
        return "no number";
    }
    console.log(args.length);
}

console.log(add( "morgen", 3));

let hallo = function() {return console.log("hallo welt");
}

hallo = () => {return console.log("geh weg");
}

hallo = () => "komm her";

let set2 = new Set(["hallo", "welt", "geh", "weg", "komm", "her"]);

set2.forEach(element => console.log(element)
);
