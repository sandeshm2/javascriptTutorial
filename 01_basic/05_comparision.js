console.log(2 == 1);
console.log("02" != 1);

let a = "2";
let b = 3;
let c = a > b;
console.log(c);
console.log(typeof c);


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*  1. The reasone is that an equality check == and comparisions > < >= <= work differently. 
    2. comparisions convert null to number, treating it as 0.
    that's why null >= 0 is true and null > 0 is false.
*/


console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false


// === check equality and data type
console.log("2" === 2); //false
